import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Floating "Celebrating 4 Years" badge with gold particles. Click opens the anniversary artwork.
 * Self-contained (no dependencies) so the same file works on htbconsults.com and the Academy.
 * It stays on screen for everyone and removes itself automatically at the end of 2026 (SHOW_UNTIL).
 */
const SHOW_UNTIL = new Date('2027-01-01T00:00:00Z');
const ARTWORK_SRC = '/anniversary-4-years.webp';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

type Particle = { x: number; y: number; r: number; vx: number; vy: number; life: number; max: number; twinkle: number };

/** Gold dust: soft glowing specks that rise, drift and twinkle out. */
function useGoldParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>, opts: { count: number; spread: number; active: boolean }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !opts.active || prefersReducedMotion()) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const spawn = (initial = false): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * opts.spread * Math.min(width, height) * 0.5;
      const max = 90 + Math.random() * 140;
      return {
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        r: 0.6 + Math.random() * 1.9,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.15 + Math.random() * 0.45),
        life: initial ? Math.random() * max : 0,
        max,
        twinkle: Math.random() * Math.PI * 2,
      };
    };
    const particles = Array.from({ length: opts.count }, () => spawn(true));
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += 0.08;
        if (p.life > p.max) { particles[i] = spawn(); continue; }
        const fade = Math.sin((p.life / p.max) * Math.PI);
        const alpha = Math.max(0, fade * (0.55 + 0.45 * Math.sin(p.twinkle)));
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        glow.addColorStop(0, `rgba(255, 236, 170, ${alpha})`);
        glow.addColorStop(0.35, `rgba(232, 182, 74, ${alpha * 0.6})`);
        glow.addColorStop(1, 'rgba(232, 182, 74, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = window.requestAnimationFrame(draw);
    };
    frame = window.requestAnimationFrame(draw);
    const onVisibility = () => {
      if (document.hidden) window.cancelAnimationFrame(frame);
      else frame = window.requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [canvasRef, opts.count, opts.spread, opts.active]);
}

const STYLES = `
.htb4-wrap{position:fixed;z-index:39;left:max(1.25rem,env(safe-area-inset-left));bottom:max(1.25rem,env(safe-area-inset-bottom));width:104px;height:104px;animation:htb4-float 5s ease-in-out infinite}
.htb4-dust{position:absolute;left:50%;top:50%;width:230px;height:230px;transform:translate(-50%,-55%);pointer-events:none}
.htb4-badge{position:relative;display:grid;place-items:center;width:100%;height:100%;padding:0;border:0;border-radius:28px;cursor:pointer;color:#f6d77d;background:radial-gradient(120% 120% at 30% 20%,#173f6e 0%,#0a2a4f 45%,#001b36 100%);box-shadow:0 14px 34px rgba(0,20,41,.45),0 0 0 1px rgba(232,182,74,.35),0 0 26px rgba(232,182,74,.28);overflow:hidden;font-family:Georgia,'Times New Roman',serif;transition:transform .25s ease,box-shadow .25s ease}
.htb4-badge:hover,.htb4-badge:focus-visible{transform:scale(1.06);box-shadow:0 18px 40px rgba(0,20,41,.5),0 0 0 1px rgba(255,214,120,.7),0 0 40px rgba(232,182,74,.5)}
.htb4-badge:focus-visible{outline:2px solid #f6d77d;outline-offset:4px}
.htb4-ring{position:absolute;inset:0;border-radius:28px;padding:2px;background:conic-gradient(from 0deg,transparent 0deg,#fff1c1 40deg,#e8b64a 90deg,transparent 150deg,transparent 210deg,#e8b64a 270deg,#fff1c1 300deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:htb4-spin 6s linear infinite;pointer-events:none}
.htb4-sheen{position:absolute;inset:-40%;background:linear-gradient(115deg,transparent 40%,rgba(255,240,190,.28) 50%,transparent 60%);animation:htb4-sheen 4.5s ease-in-out infinite;pointer-events:none}
.htb4-content{position:relative;display:grid;justify-items:center;line-height:1}
.htb4-small{font:600 8px/1 system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#f3e3b3}
.htb4-num{margin:2px 0 1px;font-size:48px;font-weight:700;background:linear-gradient(180deg,#fff4c9 0%,#f2c75c 45%,#b9821f 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 6px rgba(232,182,74,.55))}
.htb4-years{font-size:12px;letter-spacing:.32em;padding-left:.32em;color:#f6d77d}
.htb4-tip{position:absolute;left:calc(100% + 14px);top:50%;transform:translate(-6px,-50%);white-space:nowrap;padding:8px 12px;border-radius:10px;background:#001b36;color:#f3e3b3;font:500 12px/1.2 system-ui,sans-serif;box-shadow:0 8px 20px rgba(0,0,0,.3);border:1px solid rgba(232,182,74,.35);opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease}
.htb4-wrap:hover .htb4-tip{opacity:1;transform:translate(0,-50%)}
.htb4-overlay{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:20px;background:radial-gradient(circle at 50% 45%,rgba(10,42,79,.88),rgba(0,12,26,.94));animation:htb4-fade .3s ease}
.htb4-shower{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.htb4-card{position:relative;width:min(92vw,560px);border-radius:26px;padding:3px;background:linear-gradient(140deg,#fff1c1,#c8942e 35%,#6b4a12 55%,#f2c75c 80%,#fff1c1);box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 60px rgba(232,182,74,.35);animation:htb4-pop .45s cubic-bezier(.2,.9,.3,1.2)}
.htb4-card img{display:block;width:100%;height:auto;border-radius:23px}
.htb4-x{position:absolute;top:-14px;right:-14px;display:grid;place-items:center;width:40px;height:40px;padding:0;border:1px solid rgba(232,182,74,.7);border-radius:50%;background:#001b36;color:#f6d77d;font:500 22px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.4)}
.htb4-x:focus-visible{outline:2px solid #f6d77d;outline-offset:3px}
@keyframes htb4-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes htb4-spin{to{transform:rotate(360deg)}}
@keyframes htb4-sheen{0%,60%{transform:translateX(-60%)}100%{transform:translateX(60%)}}
@keyframes htb4-fade{from{opacity:0}}
@keyframes htb4-pop{from{opacity:0;transform:scale(.9) translateY(12px)}}
@media (max-width:640px){.htb4-wrap{width:82px;height:82px}.htb4-num{font-size:38px}.htb4-small{font-size:7px}.htb4-years{font-size:10px}.htb4-dust{width:180px;height:180px}.htb4-tip{display:none}}
@media (prefers-reduced-motion:reduce){.htb4-wrap,.htb4-ring,.htb4-sheen,.htb4-card,.htb4-overlay{animation:none}}
`;

export const AnniversaryBadge: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const dustRef = useRef<HTMLCanvasElement>(null);
  const showerRef = useRef<HTMLCanvasElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setVisible(Date.now() < SHOW_UNTIL.getTime());
  }, []);

  useGoldParticles(dustRef, { count: 26, spread: 0.85, active: visible });
  useGoldParticles(showerRef, { count: 90, spread: 1.6, active: open });

  const close = useCallback(() => {
    setOpen(false);
    window.requestAnimationFrame(() => badgeRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  if (!visible) return null;

  return (
    <>
      <style>{STYLES}</style>
      <div className="htb4-wrap">
        <canvas ref={dustRef} className="htb4-dust" aria-hidden="true" />
        <button ref={badgeRef} type="button" className="htb4-badge" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label="HTB Consult is celebrating 4 years. Open the anniversary message.">
          <span className="htb4-sheen" aria-hidden="true" />
          <span className="htb4-ring" aria-hidden="true" />
          <span className="htb4-content" aria-hidden="true">
            <span className="htb4-small">Celebrating</span>
            <span className="htb4-num">4</span>
            <span className="htb4-years">YEARS</span>
          </span>
        </button>
        <span className="htb4-tip" aria-hidden="true">Celebrating 4 years ✨</span>
      </div>
      {open && (
        <div className="htb4-overlay" role="dialog" aria-modal="true" aria-label="HTB Consult celebrating 4 years" onClick={close}>
          <canvas ref={showerRef} className="htb4-shower" aria-hidden="true" />
          <div className="htb4-card" onClick={(event) => event.stopPropagation()}>
            <img src={ARTWORK_SRC} alt="HTB Consult, celebrating 4 years. Turning ideas into practical solutions. Thank you for being part of our journey. Think. Analyse. Improve." width={1254} height={1254} />
            <button ref={closeRef} type="button" className="htb4-x" onClick={close} aria-label="Close">×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnniversaryBadge;
