import React from 'react';
import { Search, Bell, ShieldCheck } from 'lucide-react';

const AdminHeader = () => {
    return (
        <header className="h-16 border-b border-gray-800/50 bg-[#0B0B15] px-8 flex items-center justify-between sticky top-0 z-40">

            {/* Left: Breadcrumbs / Status */}
            <div className="flex items-center gap-4">
                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                    Moderation Console
                </h1>
                <div className="h-4 w-px bg-gray-700"></div>
                <div className="flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    SYSTEM OPERATIONAL
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-recruiter-primary transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="Search ID, User, or Reason..."
                        className="bg-[#151A25] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-recruiter-primary/50 focus:ring-1 focus:ring-recruiter-primary/50 w-64 transition-all"
                    />
                </div>

                <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-recruiter-primary shadow-[0_0_8px_#33ddff]"></span>
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;

