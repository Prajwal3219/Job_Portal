import { Bell, Menu, Search } from 'lucide-react';
import { useAuth } from '../../../../context/AuthContext';

const AdminHeader = ({ onMenuToggle }) => {
    const { user } = useAuth();
    const displayName = user?.name || 'Admin';

    return (
        <header className="h-16 border-b border-gray-800/50 bg-[#0B0B15] px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40">

            {/* Left: Breadcrumbs / Status */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuToggle}
                    className="p-2 -ml-2 text-gray-400 hover:text-white lg:hidden"
                >
                    <Menu size={24} />
                </button>
                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="hidden sm:inline">Moderation Console</span>
                    <span className="sm:hidden">Admin</span>
                </h1>
                <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
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

                <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-white leading-tight">{displayName}</span>
                        <span className="text-[10px] text-gray-500 font-medium">Administrator</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-recruiter-primary to-blue-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg ring-2 ring-recruiter-primary/20">
                        {displayName.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;

