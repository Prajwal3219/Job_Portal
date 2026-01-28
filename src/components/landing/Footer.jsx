import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-darker pt-12 xs:pt-16 sm:pt-20 pb-8 xs:pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12 mb-12 xs:mb-16">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-4 xs:mb-6">
              <div className="size-6 xs:size-7 sm:size-8 text-primary flex items-center justify-center bg-primary/20 rounded">
                <span className="material-symbols-outlined text-base xs:text-lg">psychology</span>
              </div>
              <h2 className="text-white text-lg xs:text-xl font-bold">SkillHire</h2>
            </div>
            <p className="text-gray-500 max-w-xs xs:max-w-sm mb-6 xs:mb-8 text-sm xs:text-base">
              The first AI-native recruitment platform built for the future of work. Verify skills, detect fraud, and hire faster.
            </p>
            <form
              className="glass-panel p-1 rounded-lg flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-0 max-w-full xs:max-w-md w-full"
              onSubmit={e => e.preventDefault()}
            >
              <input
                className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 w-full h-10 px-3 text-sm outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-primary hover:bg-primary-glow text-white text-sm font-bold px-4 h-10 rounded shadow-lg transition-colors mt-1 xs:mt-0 xs:ml-1"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Platform Links */}
          <div>
            <h4 className="text-white font-bold mb-4 xs:mb-6">Platform</h4>
            <ul className="flex flex-col gap-3 xs:gap-4 text-gray-400 text-sm">
              {['For Talent', 'For Recruiters', 'Enterprise', 'Pricing'].map(item => (
                <li key={item}>
                  <a className="hover:text-primary transition-colors" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4 xs:mb-6">Company</h4>
            <ul className="flex flex-col gap-3 xs:gap-4 text-gray-400 text-sm">
              {['About Us', 'Careers', 'Legal', 'Contact'].map(item => (
                <li key={item}>
                  <a className="hover:text-primary transition-colors" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Divider & Bottom Section */}
        <div className="border-t border-white/5 pt-6 xs:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs xs:text-sm text-center md:text-left">© 2024 SkillHire Inc. All rights reserved.</p>
          <div className="flex gap-3 xs:gap-4 text-gray-500">
            <a className="hover:text-white transition-colors" href="#" aria-label="Website">
              <span className="material-symbols-outlined text-base xs:text-lg">public</span>
            </a>
            <a className="hover:text-white transition-colors" href="#" aria-label="Share">
              <span className="material-symbols-outlined text-base xs:text-lg">share</span>
            </a>
            <a className="hover:text-white transition-colors" href="#" aria-label="RSS">
              <span className="material-symbols-outlined text-base xs:text-lg">rss_feed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;