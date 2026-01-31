import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ApplicantRow } from './RecruiterComponents';

const applications = [
    { id: 1, name: "John Doe", role: "Senior Frontend Dev", applied: "2m ago", score: "98", status: "New", statusColor: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
    { id: 2, name: "Alice Smith", role: "Product Designer", applied: "15m ago", score: "94", status: "Reviewing", statusColor: "text-yellow-400 border-yellow-400/20 bg-yellow-400/10" },
    { id: 3, name: "Marcus Reed", role: "DevOps Engineer", applied: "1h ago", score: "85", status: "Interview", statusColor: "text-purple-400 border-purple-400/20 bg-purple-400/10" },
    { id: 4, name: "Elena Lou", role: "Marketing Lead", applied: "3h ago", score: "60", status: "Screening", statusColor: "text-gray-400 border-gray-400/20 bg-gray-400/10" },
    { id: 5, name: "David Chen", role: "Backend Engineer", applied: "5h ago", score: "88", status: "New", statusColor: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
    { id: 6, name: "Sarah Jones", role: "UI Designer", applied: "1d ago", score: "90", status: "Shortlisted", statusColor: "text-green-400 border-green-400/20 bg-green-400/10" },
    { id: 7, name: "Mike Ross", role: "Legal Consultant", applied: "2d ago", score: "75", status: "Rejected", statusColor: "text-red-400 border-red-400/20 bg-red-400/10" }
];

export default function RecruiterApplications() {
    const { setIsSidebarOpen } = useOutletContext();
    const [filter, setFilter] = useState('All');

    const filteredApps = filter === 'All' ? applications : applications.filter(app => app.status === filter);

    return (
        <>
            <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 relative z-20">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white mr-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-lg font-bold text-white tracking-tight">Candidates</h1>
                    <span className="bg-[#1f6b7a]/20 text-[#1f6b7a] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#1f6b7a]/20">{applications.length} Total</span>
                </div>

                <div className="flex bg-[#21242c] rounded-lg p-1 border border-white/5">
                    {['All', 'New', 'Interview', 'Shortlisted'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${filter === tab ? 'bg-[#1f6b7a] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative z-10 custom-scrollbar">
                <div className="bg-[#21242c] rounded-xl border border-white/5 overflow-hidden shadow-md min-h-[500px] flex flex-col">

                    {/* Table Header */}
                    <div className="hidden sm:flex justify-between px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-white/5 bg-[#1a1d23]/50">
                        <span className="w-1/3">Candidate Details</span>
                        <span className="w-1/6">Applied</span>
                        <span className="w-1/4">Current Status</span>
                        <span className="w-1/6 text-right">AI Match</span>
                        <span className="w-10"></span>
                    </div>

                    {/* Table Body */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredApps.length > 0 ? (
                            filteredApps.map(app => (
                                <ApplicantRow key={app.id} {...app} />
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                                <span className="material-symbols-outlined text-4xl mb-2 opacity-20">group_off</span>
                                <p className="text-sm">No candidates found</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </>
    );
}
