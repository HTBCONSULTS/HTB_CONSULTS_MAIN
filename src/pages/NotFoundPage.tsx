import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => (
  <main className="flex min-h-[70vh] items-center bg-[#F6F8FB] px-4 pt-28 pb-20">
    <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg sm:p-12">
      <p className="font-mono text-sm font-bold tracking-[0.24em] text-[#9A5B00]">404 · PAGE NOT FOUND</p>
      <h1 className="font-editorial mt-4 text-4xl font-semibold text-[#001F3F] sm:text-5xl">Let’s get you back on track.</h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">That page may have moved or the address may be incorrect. Head back to the homepage or explore our services.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="focus-visible-brand inline-flex min-h-11 items-center gap-2 rounded-md bg-[#001F3F] px-5 py-3 text-sm font-bold text-white hover:bg-[#15385F]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Homepage
        </Link>
        <Link to="/services" className="focus-visible-brand inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-[#001F3F] hover:bg-[#FFF8E7]">
          Explore services
        </Link>
      </div>
    </div>
  </main>
);
