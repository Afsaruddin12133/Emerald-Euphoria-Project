import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/cn'
import logoImg from '@/assets/logo.png'

// ─── Public Navbar (Landing + Popup pages) ────────────────────────────────────
export function Navbar() {
  return (
    <header className="fixed top-[10px] lg:top-[20px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1440px] px-4 lg:px-0">
      <nav className="relative flex h-[64px] lg:h-[84px] w-full items-center pl-4 pr-4 lg:pl-[220px] lg:pr-[15px] bg-[#FFFFFF0A] backdrop-blur-[20px] rounded-[16px]">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="absolute lg:left-[80px] left-4 lg:top-[10px] top-1/2 -translate-y-1/2 lg:translate-y-0 w-[80px] h-[60px] lg:w-[120px] lg:h-[92px] shrink-0 z-10"
        >
          <img src={logoImg} alt="Emerald Euphoria" className="w-full h-full object-contain" />
        </Link>

        {/* Auth CTAs */}
        <div className="flex items-center gap-2 lg:gap-[10px] shrink-0 ml-auto z-10">
          <Link 
            to="/sign-in"
            className="flex items-center justify-center w-[70px] lg:w-[101px] h-[40px] lg:h-[54px] rounded-[10px] lg:rounded-[13px] bg-[#FFFFFF33] hover:bg-[#FFFFFF4D] text-white font-medium text-xs lg:text-sm transition-colors"
          >
            Log In
          </Link>
          <Link 
            to="/sign-up"
            className="flex items-center justify-center w-[90px] lg:w-[118px] h-[40px] lg:h-[54px] rounded-[10px] lg:rounded-[13px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-medium text-xs lg:text-sm hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>

      </nav>
    </header>
  )
}


