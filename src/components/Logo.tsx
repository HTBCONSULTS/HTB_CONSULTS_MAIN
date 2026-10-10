import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', showTagline = false }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-2xl md:text-[26px]">
          <span className="text-[#FFB81C] tracking-wider font-sans font-black">HTB</span>
        </div>
        <span
          className={`text-[9px] md:text-[10px] tracking-[0.28em] font-semibold uppercase -mt-0.5 ${
            isLight ? 'text-white/90' : 'text-[#001F3F]'
          }`}
        >
          CONSULT
        </span>
      </div>
      {showTagline && (
        <span className={`hidden sm:inline-block text-xs border-l pl-2 py-0.5 ${isLight ? 'border-white/20 text-white/60' : 'border-slate-300 text-slate-500'}`}>
          Business & Digital Solutions
        </span>
      )}
    </div>
  );
};
