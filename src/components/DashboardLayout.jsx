import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout({ userType }) {
  const title = userType === 'recruiter' ? 'Recruiter Dashboard' : 'Candidate Dashboard';

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <header className="border-b border-white/5 bg-[#15171c]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold">{title}</div>
          <nav className="flex items-center gap-4 text-sm text-gray-300">
            <Link className="hover:text-white" to="/">
              Home
            </Link>
            <Link className="hover:text-white" to="/auth">
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

