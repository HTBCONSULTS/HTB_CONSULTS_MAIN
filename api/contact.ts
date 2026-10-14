type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (payload: unknown) => void;
  setHeader?: (name: string, value: string) => void;
};

type RequestBody = Record<string, unknown>;

declare const process: {
  env: Record<string, string | undefined>;
};

const DEFAULT_RECIPIENT = 'info@htbconsults.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitBuckets = new Map<string, { windowStart: number; count: number }>();

const getText = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

const isWithinLimit = (value: unknown, limit: number, required = false): boolean => {
  if (value === undefined && !required) return true;
  return typeof value === 'string' && value.trim().length <= limit && (!required || value.trim().length > 0);
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getClientAddress = (headers: ApiRequest['headers']): string => {
  const forwarded = headers?.['x-forwarded-for'] ?? headers?.['x-real-ip'];
  const firstAddress = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return typeof firstAddress === 'string' ? firstAddress.split(',')[0].trim().slice(0, 64) || 'unknown' : 'unknown';
};

export default async function handler(request: ApiRequest, response: ApiResponse): Promise<void> {
  response.setHeader?.('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader?.('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  if (!request.body || typeof request.body !== 'object' || Array.isArray(request.body)) {
    response.status(400).json({ error: 'Please check the submitted details and try again.' });
    return;
  }

  const body = request.body as RequestBody;
  // Quietly accept bot submissions without sending them to the inbox.
  if (getText(body.website)) {
    response.status(200).json({ success: true });
    return;
  }

  const type = body.type;
  const isBooking = type === 'booking';
  if (type !== 'enquiry' && !isBooking) {
    response.status(400).json({ error: 'Please check the submitted details and try again.' });
    return;
  }

  const name = getText(body.name);
  const email = getText(body.email);
  const organisation = getText(body.organisation);
  const enquiryType = getText(body.enquiryType);
  const message = getText(body.message);
  const date = getText(body.date);
  const timeSlot = getText(body.timeSlot);
  const notes = getText(body.notes);

  const validFields =
    isWithinLimit(body.name, 120, true) &&
    isWithinLimit(body.email, 254, true) &&
    isWithinLimit(body.organisation, 160) &&
    isWithinLimit(body.enquiryType, 120) &&
    isWithinLimit(body.message, 5000) &&
    isWithinLimit(body.date, 80) &&
    isWithinLimit(body.timeSlot, 24) &&
    isWithinLimit(body.notes, 1000) &&
    EMAIL_PATTERN.test(email) &&
    (isBooking ? Boolean(date && timeSlot) : Boolean(message));

  if (!validFields) {
    response.status(400).json({ error: 'Please check the submitted details and try again.' });
    return;
  }

  // Best-effort per-function-instance throttle; the honeypot remains the primary lightweight bot trap.
  const now = Date.now();
  const clientAddress = getClientAddress(request.headers);
  const bucket = rateLimitBuckets.get(clientAddress);
  if (bucket && now - bucket.windowStart < RATE_LIMIT_WINDOW_MS && bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    response.setHeader?.('Retry-After', String(Math.ceil((RATE_LIMIT_WINDOW_MS - (now - bucket.windowStart)) / 1000)));
    response.status(429).json({ error: 'Too many requests. Please wait a few minutes and try again.' });
    return;
  }
  if (!bucket || now - bucket.windowStart >= RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(clientAddress, { windowStart: now, count: 1 });
  } else {
    bucket.count += 1;
  }
  if (rateLimitBuckets.size > 2000) {
    for (const [address, entry] of rateLimitBuckets) {
      if (now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) rateLimitBuckets.delete(address);
    }
  }

  const apiKey = getText(process.env.RESEND_API_KEY);
  const from = getText(process.env.CONTACT_FROM_EMAIL);
  const to = getText(process.env.CONTACT_TO_EMAIL) || DEFAULT_RECIPIENT;
  const fromAddress = from.match(/<([^<>]+)>$/)?.[1] || from;
  if (!apiKey || !from || from.length > 200 || /[\r\n]/.test(from) || !EMAIL_PATTERN.test(fromAddress) || !EMAIL_PATTERN.test(to)) {
    response.status(503).json({
      error: `Online email delivery is not configured yet. Please email ${DEFAULT_RECIPIENT} directly.`,
    });
    return;
  }

  const subject = isBooking ? 'Website consultation request' : 'Website enquiry';
  const details = isBooking
    ? [
        `Preferred date: ${date}`,
        `Preferred time: ${timeSlot} (UK time)`,
        'Duration requested: 30 minutes',
        `Organisation: ${organisation || 'Not provided'}`,
        `Topic: ${enquiryType || 'Initial consultation'}`,
        `Additional notes: ${notes || 'None'}`,
      ]
    : [
        `Enquiry type: ${enquiryType || 'General enquiry'}`,
        `Organisation: ${organisation || 'Not provided'}`,
        '',
        'Message:',
        message,
      ];
  const text = [`New ${isBooking ? 'consultation request' : 'website enquiry'} for HTB Consult`, '', `Name: ${name}`, `Email: ${email}`, ...details].join('\n');
  const htmlDetails = details
    .map((line) => (line ? `<p style="margin:0 0 8px">${escapeHtml(line).replace(/\n/g, '<br />')}</p>` : '<br />'))
    .join('');
  const html = [
    `<h2>${isBooking ? 'New consultation request' : 'New website enquiry'}</h2>`,
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    htmlDetails,
  ].join('');

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
      console.error('Contact email provider returned status', delivery.status);
      response.status(502).json({ error: 'We could not send this just now. Please try again or email HTB Consult directly.' });
      return;
    }

    response.status(200).json({ success: true });
  } catch {
    response.status(502).json({ error: 'We could not send this just now. Please try again or email HTB Consult directly.' });
  }
}
