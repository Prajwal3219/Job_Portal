import React from 'react';
import { Users, Clock, AlertCircle, Timer, TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, change, isPositive, extra, icon: Icon, colorClass, gradientFrom, gradientTo }) => (
    <div className={`relative overflow-hidden rounded-2xl p-6 border border-gray-800 bg-gradient-to-br from-[#151A25] to-[#0B0B15] group hover:border-[#33ddff]/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(51,221,255,0.05)]`}>

        {/* Abstract Background Glow */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-[0.03] group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500`}></div>

        <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
                <h3 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-2">{title}</h3>
                <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
                </div>
            </div>
            <div className={`p-2.5 rounded-xl bg-[#0B0B15] border border-gray-800 ${colorClass} shadow-inner`}>
                <Icon size={20} strokeWidth={1.5} />
            </div>
        </div>

        <div className="flex items-center gap-2 relative z-10">
            {change && (
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${isPositive ? 'bg-[#33ddff]/10 text-[#33ddff] border border-[#33ddff]/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                    {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {change}
                </div>
            )}
            {extra && (
                <div className="text-xs font-bold px-2 py-0.5 rounded-md bg-gray-800/50 text-gray-400 border border-gray-700">
                    {extra}
                </div>
            )}
            {!change && !extra && (
                <div className="text-xs font-medium text-gray-500">
                    Updated just now
                </div>
            )}
        </div>

        {/* Bottom Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0B0B15]">
            <div className={`h-full ${gradientFrom.replace('from-', 'bg-')} opacity-20 w-[60%]`}></div>
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
                change="8.5%"
                isPositive
                icon={Users}
                colorClass="text-[#33ddff]"
                gradientFrom="from-[#33ddff]"
                gradientTo="to-blue-600"
            />

            {/* Pending Reviews */}
            <StatsCard
                title="Pending Reviews"
                value="142"
                extra="+12 new"
                icon={Clock}
                colorClass="text-yellow-400"
                gradientFrom="from-yellow-400"
                gradientTo="to-orange-500"
            />

            {/* Active Reports */}
            <StatsCard
                title="Active Reports"
                value="28"
                extra="+5 critical"
                icon={AlertCircle}
                colorClass="text-red-500"
                gradientFrom="from-red-500"
                gradientTo="to-pink-600"
            />

            {/* Avg Resolution */}
            <StatsCard
                title="Avg Resolution"
                value="4h 12m"
                change="15m"
                isPositive={true}
                icon={Timer}
                colorClass="text-purple-400"
                gradientFrom="from-purple-400"
                gradientTo="to-indigo-500"
            />

        </div>
    );
};

export default StatsGrid;


