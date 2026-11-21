import { Link } from 'react-router-dom';

const deliverables = [
  ['A map of the current process', 'We trace a recent request with the people who handled it. The map shows each handover, decision and wait, including work that happens in inboxes and spreadsheets.'],
  ['A change your team can test', 'We agree which delay to tackle first, who owns the decision and what the team needs to try a different approach.'],
  ['A way to measure the result', 'We agree a baseline and review date. Depending on the problem, we might track waiting time, repeat enquiries or the number of requests sent back for missing information.'],
];

export function ProcessImprovementPage() {
  return (
    <article>
      <header className="bg-[#001F3F] px-5 pb-14 pt-28 text-white sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link to="/services#service-process" className="text-sm text-[#FFB81C] underline">Consulting services</Link>
          <h1 className="mt-6 max-w-3xl font-editorial text-4xl leading-tight sm:text-6xl">Business process improvement consultancy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8">When customers keep chasing updates, your team needs to know where the work gets held up. HTB Consult helps you follow a request from start to finish and test a practical fix.</p>
          <p className="mt-4 text-sm text-slate-200">Based in Chesterfield, supporting organisations in Sheffield and across the UK.</p>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 py-12 text-[#001F3F]">
        <section className="max-w-3xl">
          <h2 className="font-editorial text-3xl">Why is the customer still waiting?</h2>
          <p className="mt-4 leading-7">Imagine a customer asks for a refund on Monday. The adviser checks the details in ten minutes. By Thursday, the request is still waiting for a manager to approve it. Training the adviser to work faster would save very little time.</p>
          <p className="mt-3 leading-7">In a workshop, we would ask which refunds genuinely need a manager’s judgement. The team could then test an agreed approval limit and compare customer waiting times, errors and escalations before and after the change.</p>
        </section>
        <section className="my-12">
          <h2 className="font-editorial text-3xl">What you take away</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {deliverables.map(([heading, body]) => (
              <div key={heading} className="border-t-2 border-[#FFB81C] pt-4">
                <h3 className="text-lg font-bold">{heading}</h3>
                <p className="mt-2 leading-7 text-slate-700">{body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl bg-[#FFF8E7] p-6 sm:p-8">
          <h2 className="font-editorial text-3xl">Bring one process to the conversation</h2>
          <p className="my-4 max-w-2xl leading-7">Tell us what starts the process, who is waiting and what your team has already tried. We can use the initial consultation to decide whether a process review would help.</p>
          <Link className="focus-visible-brand inline-block rounded-md bg-[#FFB81C] px-5 py-3 font-bold" to="/contact">Discuss your process with HTB</Link>
        </section>
        <Link className="mt-7 inline-block font-semibold underline" to="/insights/how-process-mapping-improves-business-processes">Read our guide to process mapping</Link>
      </div>
    </article>
  );
}
