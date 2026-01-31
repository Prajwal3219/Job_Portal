import React from 'react';

export const ReportsVolumeChart = () => {
    return (
        <div className="p-6 rounded-2xl bg-[#151A25] border border-gray-800 flex flex-col h-full relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-[0.03]">
                <div className="border-r border-white/20"></div>
                <div className="border-r border-white/20"></div>
                <div className="border-r border-white/20"></div>
                <div className="border-r border-white/20"></div>
                <div className="border-r border-white/20"></div>
                <div className="border-r border-white/20"></div>
                <div className="col-span-6 border-b border-white/20 h-full"></div>
                <div className="col-span-6 border-b border-white/20 h-full"></div>
                <div className="col-span-6 border-b border-white/20 h-full"></div>
            </div>

            <div className="flex justify-between items-start mb-6 z-10">
                <div>
                    <h3 className="text-white font-bold text-lg">Reports Volume</h3>
                    <p className="text-gray-400 text-xs mt-1">Last 7 Days activity log</p>
                </div>
                <div className="flex bg-[#0B0B15] rounded-lg p-1 border border-gray-800">
                    <button className="px-3 py-1 bg-[#1f6b7a]/20 text-[#33ddff] text-[10px] font-bold rounded shadow-[0_0_10px_rgba(51,221,255,0.2)]">WEEKLY</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-white text-[10px] font-bold rounded transition-colors">MONTHLY</button>
                </div>
            </div>

            <div className="flex-1 relative w-full mt-4 flex items-end">
                {/* Chart Area */}
                <div className="w-full h-48 relative">
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#33ddff" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#33ddff" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Area */}
                        <path d="M0,45 C20,40 30,25 40,25 S60,40 70,20 S90,25 100,22 V50 H0 Z" fill="url(#chartGradient)" />

                        {/* Line */}
                        <path d="M0,45 C20,40 30,25 40,25 S60,40 70,20 S90,25 100,22" fill="none" stroke="#33ddff" strokeWidth="0.8" vectorEffect="non-scaling-stroke"
                            className="drop-shadow-[0_0_8px_rgba(51,221,255,0.6)]"
                        />

                        {/* Data Points (Circles) */}
                        <circle cx="40" cy="25" r="1.5" fill="#0B0B15" stroke="#33ddff" strokeWidth="0.8" className="animate-pulse" />
                        <circle cx="70" cy="20" r="1.5" fill="#0B0B15" stroke="#33ddff" strokeWidth="0.8" />
                    </svg>

                    {/* X Axis Labels */}
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-600 uppercase">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FlagReasonsChart = () => {
    const data = [
        { label: 'Spam', value: 42, color: 'bg-[#33ddff]', width: 'w-[42%]' },
        { label: 'Harassment', value: 28, color: 'bg-red-500', width: 'w-[28%]' },
        { label: 'Fake Profile', value: 15, color: 'bg-lime-400', width: 'w-[15%]' },
        { label: 'Other', value: 15, color: 'bg-gray-500', width: 'w-[15%]' },
    ];

    return (
        <div className="p-6 rounded-2xl bg-[#151A25] border border-gray-800 h-full">
            <h3 className="text-white font-bold text-lg mb-1">Flag Reasons</h3>
            <p className="text-gray-400 text-xs mb-8">Distribution by category</p>

            <div className="space-y-6">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-xs font-bold mb-2">
                            <span className="text-gray-300">{item.label}</span>
                            <span className={item.color.replace('bg-', 'text-')}>{item.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0B0B15] rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${item.color} ${item.width} shadow-[0_0_10px_currentColor]`}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-8">
                <button className="w-full py-3 rounded-lg border border-gray-800 text-xs font-bold text-[#33ddff] hover:bg-[#33ddff]/10 hover:border-[#33ddff]/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
                    View Detailed Report
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

