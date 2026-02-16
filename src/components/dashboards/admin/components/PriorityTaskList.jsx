import React from 'react';
import { Filter, Download, User, Smartphone, MoreHorizontal, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const SeverityBadge = ({ level }) => {
    const styles = {
        CRITICAL: 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.15)] ring-1 ring-red-500/30',
        HIGH: 'bg-orange-500/10 text-orange-500 border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/30',
        MEDIUM: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.15)] ring-1 ring-yellow-400/30',
    };

    const icons = {
        CRITICAL: AlertCircle,
        HIGH: AlertCircle,
        MEDIUM: Clock,
    };

    const Icon = icons[level] || AlertCircle;

    return (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${styles[level] || styles.MEDIUM} uppercase tracking-wider`}>
            <Icon size={12} strokeWidth={2.5} />
            {level}
        </div>
    );
};

const UserEntity = ({ name, type }) => (
    <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#222528] to-[#151A25] flex items-center justify-center text-gray-400 border border-gray-700 shadow-inner">
            {type === 'mobile' ? <Smartphone size={16} /> : <User size={16} />}
        </div>
        <div>
            <span className="font-bold text-sm text-gray-200 block">{name}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">{type}</span>
        </div>
    </div>
);

const MobileTaskCard = ({ task }) => (
    <div className="bg-[#151A25] border border-gray-800 rounded-xl p-5 mb-4 flex flex-col gap-4 relative overflow-hidden shadow-md">
        {/* Top Row: ID + Severity */}
        <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#33ddff] font-mono bg-[#33ddff]/10 px-2 py-1 rounded border border-[#33ddff]/20">{task.id}</span>
            <SeverityBadge level={task.severity} />
        </div>

        {/* User Info */}
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#222528] to-[#1a1f2e] flex items-center justify-center text-gray-400 border border-gray-700 shrink-0 shadow-lg">
                {task.type === 'mobile' ? <Smartphone size={18} /> : <User size={18} />}
            </div>
            <div>
                <p className="font-bold text-sm text-white">{task.user}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    {task.reason}
                </p>
            </div>
        </div>

        {/* Bottom Row: Time + Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800/50 mt-1">
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                <Clock size={14} />
                {task.time} ago
            </span>

            {task.action === 'resolve' ? (
                <button className="px-5 py-2 rounded-lg bg-[#33ddff] text-[#0B0B15] text-xs font-bold hover:bg-[#25c4e6] shadow-[0_0_15px_rgba(51,221,255,0.3)] transition-all uppercase tracking-wide">
                    Resolve
                </button>
            ) : (
                <button className="px-5 py-2 rounded-lg bg-gray-800 text-white text-xs font-bold hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all uppercase tracking-wide">
                    Review
                </button>
            )}
        </div>
    </div>
);

const PriorityTaskList = () => {
    const tasks = [
        { id: '#9921', user: 'Alex Morgan', type: 'mobile', reason: 'Harassment / Hate Speech', severity: 'CRITICAL', time: '12m 30s', action: 'resolve' },
        { id: '#9920', user: 'Sarah Jenkins', type: 'user', reason: 'Spam Distribution', severity: 'HIGH', time: '45m 12s', action: 'review' },
        { id: '#9918', user: 'Michael Chen', type: 'mobile', reason: 'Fake Identity', severity: 'MEDIUM', time: '1h 05m', action: 'review' },
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#33ddff]/10 rounded-lg border border-[#33ddff]/20">
                        <AlertCircle size={20} className="text-[#33ddff]" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Priority Task List</h2>
                        <p className="text-xs text-gray-400">Tasks requiring immediate attention</p>
                    </div>
                </div>

                <div className="sm:ml-auto flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-800 bg-[#151A25] text-xs font-bold text-gray-400 hover:text-white hover:border-gray-700 transition-all uppercase tracking-wider">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-800 bg-[#151A25] text-xs font-bold text-gray-400 hover:text-white hover:border-gray-700 transition-all uppercase tracking-wider">
                        <Download size={14} /> Export
                    </button>
                </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#151A25] shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 bg-[#1a1f2e]/50">
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Task ID</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">User Entity</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Flag Reason</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Severity</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Time Elapsed</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {tasks.map((task) => (
                            <tr key={task.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="p-5">
                                    <span className="font-mono text-xs font-bold text-[#33ddff] bg-[#33ddff]/5 px-2 py-1 rounded">{task.id}</span>
                                </td>
                                <td className="p-5">
                                    <UserEntity name={task.user} type={task.type} />
                                </td>
                                <td className="p-5">
                                    <span className="text-sm font-medium text-gray-300">{task.reason}</span>
                                </td>
                                <td className="p-5">
                                    <SeverityBadge level={task.severity} />
                                </td>
                                <td className="p-5">
                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                        <Clock size={14} />
                                        {task.time}
                                    </div>
                                </td>
                                <td className="p-5 text-right">
                                    {task.action === 'resolve' ? (
                                        <button className="px-5 py-2 rounded-lg bg-[#33ddff] text-[#0B0B15] text-xs font-bold hover:bg-[#25c4e6] hover:shadow-[0_0_15px_rgba(51,221,255,0.4)] transition-all uppercase tracking-wide transform hover:-translate-y-0.5">
                                            RESOLVE
                                        </button>
                                    ) : (
                                        <button className="px-4 py-2 rounded-lg bg-transparent text-gray-400 text-xs font-bold hover:text-white border border-gray-700 hover:border-gray-500 transition-all uppercase tracking-wide">
                                            REVIEW
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4 border-t border-gray-800 bg-[#1a1f2e]/30 flex justify-center">
                    <button className="text-xs font-bold text-gray-500 hover:text-[#33ddff] transition-colors uppercase tracking-widest flex items-center gap-2">
                        View All Tasks
                        <MoreHorizontal size={14} />
                    </button>
                </div>
            </div>

            {/* Mobile Card View */}
            <div className="sm:hidden space-y-4">
                {tasks.map(task => (
                    <MobileTaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default PriorityTaskList;


