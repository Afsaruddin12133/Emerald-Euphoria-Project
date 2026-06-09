import logoImg from '@/assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthModal } from './AuthModal';

// ─── Public Navbar (Landing + Popup pages) ────────────────────────────────────
export function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <header className="fixed top-[10px] lg:top-[20px] left-0 right-0 z-50 w-full pointer-events-none">
      
      {/* Nav Background and CTAs */}
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 pointer-events-auto">
        <nav className="relative flex h-[74px] lg:h-[80px] w-full items-center pr-3 lg:pr-[15px] bg-[#FFFFFF0A] backdrop-blur-[20px] rounded-[16px]">
          {/* Auth CTAs */}
            <div className="flex items-center gap-2 lg:gap-[10px] shrink-0 ml-auto z-10">
            <button
              onClick={() => openAuth('signin')}
              className="flex cursor-pointer items-center justify-center w-[76px] lg:w-[101px] h-[46px] lg:h-[45px] rounded-[10px] lg:rounded-[13px] bg-[#FFFFFF33] hover:bg-[#FFFFFF4D] text-white font-['Montserrat'] font-extrabold lg:font-bold text-[13px] lg:text-[16px] leading-none transition-colors"
              style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
            >
              Log In
            </button>
            <button
              onClick={() => openAuth('signup')}
              className="flex cursor-pointer items-center justify-center w-[96px] lg:w-[118px] h-[46px] lg:h-[45px] rounded-[10px] lg:rounded-[13px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-extrabold lg:font-bold text-[13px] lg:text-[16px] leading-none hover:opacity-90 transition-opacity"
              style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
            >
              Register
            </button>
          </div>
        </nav>
      </div>

      {/* Invisible Container for Logo Alignment */}
      <div className="container-custom absolute top-0 left-0 right-0 bottom-0 mx-auto pointer-events-none">
        <Link
          to="/"
          className="absolute left-[26px] md:left-[32px] lg:top-[10px] top-[45px] -translate-y-1/2 lg:translate-y-0 w-[90px] h-[68px] lg:w-[120px] lg:h-[92px] shrink-0 z-10 pointer-events-auto"
        >
          <img src={logoImg} alt="Emerald Euphoria" className="w-full h-full object-contain" />
        </Link>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialMode={authMode} />
    </header>
  )
}


