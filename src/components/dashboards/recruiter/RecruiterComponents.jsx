import React from 'react';

// 1. Stat Card
export const StatCard = ({ icon, label, value, trend, trendUp }) => (
    <div className="bg-[#21242c] rounded-xl border border-white/5 p-4 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all shadow-md">
        <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{label}</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{value}</h3>
                        {trend && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border mb-1 flex items-center ${trendUp ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-red-400 bg-red-400/10 border-red-400/20'}`}>
                                <span className="material-symbols-outlined text-[10px] mr-0.5">{trendUp ? 'trending_up' : 'trending_down'}</span>
                                {trend}
                            </span>
                        )}
                    </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                </div>
            </div>
        </div>
    </div>
);

// 2. Applicant Row
export const ApplicantRow = ({ name, role, applied, score, status, statusColor }) => (
    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0 group">
        <div className="flex items-center gap-3 w-1/3 min-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-[#1a1d23] border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-300 group-hover:text-[#1f6b7a] group-hover:border-[#1f6b7a]/30 transition-colors flex-shrink-0">
                {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{name}</p>
                <p className="text-[10px] text-gray-500 truncate">{role}</p>
            </div>
        </div>

        <div className="hidden sm:block w-1/6 text-[10px] text-gray-400">{applied}</div>

        <div className="w-1/4 sm:w-1/4">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold border ${statusColor}`}>
                <span className={`w-1 h-1 rounded-full mr-1.5 ${statusColor.replace('text-', 'bg-').replace('border-', '')}`}></span>
                {status}
            </span>
        </div>

        <div className="w-1/6 text-right">
            <span className="text-xs font-extrabold text-[#1f6b7a]">{score}%</span>
        </div>

        <div className="hidden sm:block w-10 text-right">
            <button className="text-gray-500 hover:text-white">
                <span className="material-symbols-outlined text-[16px]">more_vert</span>
            </button>
        </div>
    </div>
);

// 3. Glass Card Helper
export const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-[#21242c] border border-white/5 rounded-xl relative overflow-hidden shadow-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);
