import React from 'react';
import { Users, Clock, AlertCircle, Timer } from 'lucide-react';

const StatsCard = ({ title, value, change, isPositive, extra, icon: Icon, colorClass, waveColor }) => (
    <div className="bg-[#151A25] border border-gray-800 rounded-2xl p-5 relative overflow-hidden group hover:border-[#33ddff]/30 transition-all">
        <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</h3>
                <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-white font-display">{value}</span>
                    {change && (
                        <span className={`text-xs font-bold mb-1.5 ${isPositive ? 'text-[#33ddff]' : 'text-red-500'}`}>
                            {change}
                        </span>
                    )}
                    {extra}
                </div>
            </div>
            <div className={`p-2 rounded-lg bg-[#0B0B15] border border-gray-800 ${colorClass}`}>
                <Icon size={18} />
            </div>
        </div>

        {/* Decorative Wave (SVG) */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30">
            <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,25 L0,15 Q25,5 50,15 T100,10 L100,25 Z" fill="none" stroke={waveColor} strokeWidth="2" className="drop-shadow-[0_0_5px_rgba(51,221,255,0.5)]" />
            </svg>
        </div>
    </div>
);

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            {/* Total Users */}
            <StatsCard
                title="Total Users"
                value="24,592"
                change="+8.5%"
                isPositive
                icon={Users}
                colorClass="text-[#33ddff]"
                waveColor="#33ddff"
            />

            {/* Pending Reviews */}
            <StatsCard
                title="Pending Reviews"
                value="142"
                extra={<span className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20">+12 new</span>}
                icon={Clock}
                colorClass="text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                waveColor="#facc15"
            />

            {/* Active Reports */}
            <StatsCard
                title="Active Reports"
                value="28"
                extra={<span className="text-[10px] text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">+5 critical</span>}
                icon={AlertCircle}
                colorClass="text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                waveColor="#ef4444"
            />

            {/* Avg Resolution */}
            <StatsCard
                title="Avg Resolution"
                value="4h 12m"
                change="-15m"
                isPositive
                icon={Timer}
                colorClass="text-gray-400"
                waveColor="#9ca3af"
            />

        </div>
    );
};

export default StatsGrid;

