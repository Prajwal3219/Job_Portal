import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    PieChart,
    Pie,
    Legend
} from 'recharts';

export const ReportsVolumeChart = () => {
    const data = [
        { name: 'Mon', value: 20 },
        { name: 'Tue', value: 45 },
        { name: 'Wed', value: 28 },
        { name: 'Thu', value: 80 },
        { name: 'Fri', value: 55 },
        { name: 'Sat', value: 40 },
        { name: 'Sun', value: 30 },
    ];

    return (
        <div className="p-6 rounded-2xl bg-[#151A25] border border-gray-800 flex flex-col h-full relative overflow-hidden shadow-lg">
            <div className="flex justify-between items-start mb-6 z-10">
                <div>
                    <h3 className="text-white font-bold text-lg">Reports Volume</h3>
                    <p className="text-gray-400 text-xs mt-1">Last 7 Days activity log</p>
                </div>
                <div className="flex bg-[#0B0B15] rounded-lg p-1 border border-gray-800">
                    <button className="px-3 py-1 bg-[#33ddff]/10 text-[#33ddff] text-[10px] font-bold rounded shadow-[0_0_10px_rgba(51,221,255,0.1)] transition-all">WEEKLY</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-white text-[10px] font-bold rounded transition-colors">MONTHLY</button>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#33ddff" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#33ddff" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2b303b" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 'bold' }}
                            dy={10}
                        />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0B0B15', borderColor: '#1f2937', borderRadius: '8px' }}
                            itemStyle={{ color: '#33ddff', fontWeight: 'bold' }}
                            labelStyle={{ color: '#9ca3af' }}
                            cursor={{ stroke: '#33ddff', strokeWidth: 1, strokeDasharray: '3 3' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#33ddff"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const FlagReasonsChart = () => {
    const data = [
        { name: 'Spam', value: 42, color: '#33ddff' },
        { name: 'Harassment', value: 28, color: '#ef4444' }, // Red-500
        { name: 'Fake Profile', value: 15, color: '#a3e635' }, // Lime-400
        { name: 'Other', value: 15, color: '#6b7280' }, // Gray-500
    ];

    return (
        <div className="p-6 rounded-2xl bg-[#151A25] border border-gray-800 h-full flex flex-col shadow-lg">
            <h3 className="text-white font-bold text-lg mb-1">Flag Reasons</h3>
            <p className="text-gray-400 text-xs mb-6">Distribution by category</p>

            <div className="flex-1 w-full min-h-[200px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0B0B15', borderColor: '#1f2937', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-bold text-white">42%</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Spam</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs text-gray-300 font-medium">{item.name}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
                <button className="w-full py-3 rounded-lg border border-gray-800 text-xs font-bold text-[#33ddff] hover:bg-[#33ddff]/10 hover:border-[#33ddff]/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wider group">
                    View Detailed Report
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};


