import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout({ userType }) {
  const title = userType === 'recruiter' ? 'Recruiter Dashboard' : 'Candidate Dashboard';

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#1a1d23]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="size-8 flex items-center justify-center bg-primary/20 text-primary rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
            </div>
            <span className="text-white text-lg font-bold tracking-tight hidden xs:inline">{title}</span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 text-sm text-gray-300">
            <Link className="hover:text-white transition-colors" to="/">
              Home
            </Link>
            <Link className="hover:text-white transition-colors" to="/auth">
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
}

