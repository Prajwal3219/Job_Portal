import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    // Main Navbar - Added solid background color to prevent see-through on scroll
    <nav className="fixed top-0 w-full z-50 bg-[#1a1d23] border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary flex items-center justify-center bg-primary/20 rounded-lg">
            <span className="material-symbols-outlined text-[20px]">psychology</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">SkillHire</h2>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {['For Talent', 'For Recruiters', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/auth">
            <button className="glass-button px-5 h-10 rounded-lg text-sm font-bold text-white hover:bg-white/10 transition-all border border-white/10">
              Log In
            </button>
          </Link>
          <button className="bg-primary hover:bg-primary-glow shadow-[0_0_20px_rgba(31,107,122,0.4)] hover:shadow-[0_0_30px_rgba(31,107,122,0.6)] transition-all px-5 h-10 rounded-lg text-white text-sm font-bold">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY
         1. removed 'glass-panel' to stop transparency.
         2. added 'bg-[#1a1d23]' for a solid dark background.
         3. added 'fixed inset-0 top-20' to cover the whole screen below the navbar.
      */}
      <div
        className={`
          fixed inset-0 top-20 z-40 
          bg-[#1a1d23] 
          flex flex-col p-6 
          transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col gap-6 h-full">
          {/* Mobile Links */}
          <div className="flex flex-col gap-4">
            {['For Talent', 'For Recruiters', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-200 hover:text-white text-xl font-semibold py-3 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-auto mb-8">
            <Link to="/auth">
              <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold text-lg active:bg-white/5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Log In
              </button>
            </Link>
            <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary-glow text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;