import { Link } from 'react-router-dom';
import { servicePages } from '../config/servicePages';
import { ACADEMY_SITE_URL } from '../config/siteData';

export function ConsultancyServicePage({ page }: { page: typeof servicePages[number] }) {
  return (
    <article className="text-[#001F3F]">
      <header className="bg-[#001F3F] px-5 pb-14 pt-28 text-white sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link className="text-sm text-[#FFB81C] underline" to="/services">Consulting services</Link>
          <h1 className="mt-6 max-w-3xl font-editorial text-4xl leading-tight sm:text-6xl">{page.heading}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8">{page.description}</p>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-editorial text-3xl">{page.question}</h2>
        <p className="mt-4 max-w-3xl leading-7">{page.example}</p>
        <h2 className="mt-10 font-editorial text-3xl">What we can deliver</h2>
        <ul className="my-6 grid gap-5 sm:grid-cols-3">
          {page.outputs.map(item => <li className="border-t-2 border-[#FFB81C] pt-4 leading-7" key={item}>{item}</li>)}
        </ul>
        <Link className="focus-visible-brand mt-3 inline-block rounded-md bg-[#FFB81C] px-5 py-3 font-bold" to="/contact">{page.cta}</Link>
        {page.path === '/services/digital-transformation' && <p className="mt-6"><Link className="font-semibold underline" to="/services/software-development">Explore bespoke software development</Link></p>}
        <p className="mt-10 border-t pt-5 text-sm">Looking for training? <a className="font-semibold underline" href={ACADEMY_SITE_URL}>Explore professional courses at HTB Academy</a>.</p>
      </div>
    </article>
  );
}
