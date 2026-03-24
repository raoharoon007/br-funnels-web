'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Our Clients', href: '#clients' },
  { label: 'Our Process', href: '#process' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0B0F1A] border-b-[0.5px] border-b-primary ">
      <div className="mx-auto flex items-center justify-between py-4 px-4 lg:px-8 2xl:px-12 max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-360">
        
        <Link
          href="/"
          className="select-none leading-normal font-semibold text-[24px] sm:text-[25px] md:text-[26px] lg:text-[27px] xl:text-[27.5px] 2xl:text-[28px] text-gradient-main"
        >
          BR FUNNELS
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md2:flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
               
                className="text-sm sm:text-base md:text-base lg:text-lg font-medium text-foreground transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md2:flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.75 md:py-[13.5px] rounded-[10px] bg-gradient-horizontal text-background text-sm sm:text-base md:text-lg font-medium transition-transform active:scale-95"
        >
          <Image src="/assets/icons/Phone.svg" alt="Send" width={16} height={16} priority/>
          Book a Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md2:hidden flex flex-col gap-1.5 p-2 rounded-md transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md2:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 py-4 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-base font-medium text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
            
              className="inline-flex items-center justify-center gap-2 px-6 py-[13.5px] rounded-[10px] bg-gradient-horizontal text-background text-sm sm:text-base md:text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <Image src="/assets/icons/Phone.svg" alt="Send" width={18} height={18} priority />
              Book a Call
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar