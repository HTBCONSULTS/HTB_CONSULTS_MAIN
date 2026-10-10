import React from 'react';
import consultLogo from '../assets/images/brand/htb-consult-logo-web.webp';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => (
  <img
    src={consultLogo}
    alt="HTB Consult"
    width={900}
    height={660}
    decoding="async"
    className={`h-12 w-auto object-contain sm:h-14 ${className}`}
  />
);
