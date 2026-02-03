import React from 'react';

export const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-[#21242c] border border-white/5 rounded-xl relative overflow-hidden shadow-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export const JobCard = ({ logo, role, company, tags, match, salary }) => (
    <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all duration-300 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="flex-shrink-0">
                {/* Increase the logo size and reduce the padding */}
                <div className="w-16 h-16 rounded-lg bg-[#1a1d23] border border-white/10 flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-105 transition-transform duration-300 p-0">
                    <span className="material-symbols-outlined text-[40px] leading-none">{logo}</span>
                </div>
            </div>
            <div className="flex-1 min-w-0 w-full">
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#1f6b7a] transition-colors duration-300 truncate">{role}</h4>
                <p className="text-xs text-gray-400 mb-3 truncate">{company}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-[#1a1d23] border border-white/5 text-[10px] font-medium text-gray-300">{tag}</span>
                    ))}
                    {salary && <span className="px-2.5 py-1 rounded bg-[#1a1d23] border border-white/5 text-[10px] font-medium text-green-400 border-green-400/10">{salary}</span>}
                </div>
            </div>
            <div className="flex flex-row sm:flex-col items-end sm:items-end gap-3 pl-0 sm:pl-5 border-l-0 sm:border-l border-white/5 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex flex-row sm:flex-col items-end">
                    <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Match</span>
                    <span className="text-xl font-extrabold text-[#1f6b7a] drop-shadow-[0_0_8px_rgba(31,107,122,0.4)] sm:ml-0 ml-3">{match}%</span>
                </div>
                <button className="bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-2 px-5 rounded transition-all shadow-lg shadow-[#1f6b7a]/20 w-full sm:w-auto">Apply</button>
            </div>
        </div>
    </div>
);

export const StatCard = ({ icon, label, value, subtext, progress }) => (
    <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all shadow-md">
        <div className="relative z-10">
            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-7xl text-[#1f6b7a]">{icon}</span>
            </div>
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{label}</p>
                    <h3 className="text-4xl font-extrabold text-white">{value}</h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
            </div>
            {progress ? (
                <div className="w-full bg-[#1a1d23] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#1f6b7a] h-full rounded-full w-[85%] shadow-[0_0_8px_rgba(31,107,122,0.6)]"></div>
                </div>
            ) : (
                <div className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded bg-white/5 w-fit border border-white/5">{subtext}</div>
            )}
            {progress && (
                <p className="text-[10px] text-[#2a8a9c] mt-3 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">info</span> Complete portfolio to reach 100%
                </p>
            )}
        </div>
    </div>
);
