import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

/** Brand wordmark ported from the HTB-Consult Academy repository's Navbar. */
export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', showTagline = false }) => {
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <span
        aria-hidden="true"
        className="bg-clip-text font-serif text-[25px] font-bold leading-none tracking-tight text-transparent md:text-[27px]"
        style={{
          backgroundImage: 'linear-gradient(135deg, hsl(43, 80%, 55%), hsl(43, 70%, 70%))',
          WebkitTextFillColor: 'transparent',
        }}
      >
        HTB
      </span>
      <span
        aria-hidden="true"
        className={`font-sans text-[11px] font-light uppercase leading-none tracking-[0.2em] sm:text-xs md:text-sm ${
          isLight ? 'text-white/95' : 'text-[#001F3F]'
        }`}
      >
        CONSULTS
      </span>
      {showTagline && (
        <span className={`hidden border-l py-0.5 pl-2 text-xs sm:inline-block ${isLight ? 'border-white/20 text-white/60' : 'border-slate-300 text-slate-500'}`}>
          Business &amp; Digital Solutions
        </span>
      )}
    </div>
  );
};
