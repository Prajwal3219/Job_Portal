import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { GlassCard } from './RecruiterComponents';

const postedJobs = [
    {
        id: 1,
        role: 'Senior Frontend Engineer',
        location: 'Remote',
        type: 'Full-time',
        postedDate: 'Jan 15, 2026',
        applicants: 42,
        views: 1205,
        status: 'Active',
        statusColor: 'text-green-400 bg-green-400/10 border-green-400/20'
    },
    {
        id: 2,
        role: 'Product Designer',
        location: 'New York (Hybrid)',
        type: 'Full-time',
        postedDate: 'Jan 10, 2026',
        applicants: 28,
        views: 850,
        status: 'Active',
        statusColor: 'text-green-400 bg-green-400/10 border-green-400/20'
    },
    {
        id: 3,
        role: 'Backend Developer (Go)',
        location: 'Remote',
        type: 'Contract',
        postedDate: 'Dec 05, 2025',
        applicants: 15,
        views: 620,
        status: 'Closed',
        statusColor: 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
];

export default function RecruiterJobs() {
    const { setIsSidebarOpen } = useOutletContext();
    const [filter, setFilter] = useState('All');

    const filteredJobs = filter === 'All' ? postedJobs : postedJobs.filter(job => job.status === filter);

    return (
        <>
            {/* Header */}
            <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 relative z-20">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white mr-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-lg font-bold text-white tracking-tight">Posted Jobs</h1>
                    <span className="bg-[#1f6b7a]/20 text-[#1f6b7a] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#1f6b7a]/20">{postedJobs.length} Total</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex bg-[#21242c] rounded-lg p-1 border border-white/5 mr-2">
                        {['All', 'Active', 'Closed'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${filter === tab ? 'bg-[#1f6b7a] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <Link to="/dashboard/recruiter/post-job">
                        <button className="flex items-center gap-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-2 px-4 rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all">
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            <span className="hidden sm:inline">Create New Job</span>
                        </button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative z-10 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Create New Card (optional visual cue) */}
                    <Link to="/dashboard/recruiter/post-job" className="group">
                        <div className="h-full min-h-[180px] rounded-xl border border-dashed border-white/20 hover:border-[#1f6b7a] bg-white/5 hover:bg-[#1f6b7a]/5 flex flex-col items-center justify-center transition-all cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-[#21242c] group-hover:bg-[#1f6b7a] flex items-center justify-center transition-colors mb-3 border border-white/10 group-hover:border-[#1f6b7a]">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-2xl transition-colors">add</span>
                            </div>
                            <p className="text-sm font-bold text-gray-300 group-hover:text-white">Post a New Job</p>
                        </div>
                    </Link>

                    {filteredJobs.map(job => (
                        <GlassCard key={job.id} className="p-5 flex flex-col hover:border-[#1f6b7a]/50 transition-colors group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#1f6b7a] transition-colors">{job.role}</h3>
                                    <p className="text-xs text-gray-400">{job.location} • {job.type}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${job.statusColor}`}>
                                    {job.status}
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-mono mb-4">
                                    <span>Posted: {job.postedDate}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-2">
                                    <div className="bg-[#1a1d23] p-2 rounded-lg border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase">Applicants</p>
                                        <p className="text-xl font-bold text-white">{job.applicants}</p>
                                    </div>
                                    <div className="bg-[#1a1d23] p-2 rounded-lg border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase">Views</p>
                                        <p className="text-xl font-bold text-white">{job.views}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                                <button className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors">
                                    Manage
                                </button>
                                <button className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                            </div>
                        </GlassCard>
                    ))}

                </div>
            </main>
        </>
    );
}
