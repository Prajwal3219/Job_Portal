import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    AlertTriangle, ShieldAlert, UserX, Eye, MoreVertical,
    CheckCircle, X, ExternalLink, MessageSquare, Briefcase,
    MapPin, Calendar, Mail, Phone, Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminReports = () => {
    const [selectedReport, setSelectedReport] = useState(null);

    // Mock Data for "Scam" / "Fake" Reports
    const reports = [
        {
            id: 9921,
            user: {
                name: "Robert Fox",
                email: "robert.fox@gmail.com", // Suspicious domain or pattern
                role: "Recruiter",
                company: "Google Inc.", // Likely fake
                location: "New York, USA",
                joined: "2 days ago",
                avatar: null
            },
            type: "Fake Job Posting",
            reason: "Asking for money before interview",
            confidence: 94,
            status: "Pending",
            evidence: [
                { type: "Message", content: "Please deposit $50 for the security badge fee to proceed." },
                { type: "Job Post", content: "Urgently hiring! No interview needed. $5000/week." }
            ]
        },
        {
            id: 9925,
            user: {
                name: "Crypto Investments",
                email: "admin@crypto-gains.io",
                role: "Candidate",
                company: "N/A",
                location: "Unknown",
                joined: "1 hour ago",
                avatar: null
            },
            type: "Spam / Bot",
            reason: "Posting spam links in community",
            confidence: 88,
            status: "Pending",
            evidence: [
                { type: "Comment", content: "Join via this link for free bitcoin! [malicious-link.com]" }
            ]
        },
        {
            id: 9928,
            user: {
                name: "Sarah Connors",
                email: "sarahxc@yahoo.com",
                role: "Candidate",
                company: "N/A",
                location: "Boston, USA",
                joined: "5 months ago",
                avatar: null
            },
            type: "Impersonation",
            reason: "Using fake photos and identity",
            confidence: 72,
            status: "Pending",
            evidence: [
                { type: "Profile", content: "Profile photo matches stock image database #4421." }
            ]
        }
    ];

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-red-500 bg-red-500/10 border-red-500/20';
        if (score >= 70) return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    };

    return (
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto relative h-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <ShieldAlert className="text-red-500" />
                        Scam & Fake Profile Reports
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">High-priority moderation queue for fraud prevention.</p>
                </div>
                <div className="flex gap-3">
                    <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm">
                        {reports.length} Critical Issues
                    </div>
                </div>
            </div>

            {/* Reports Table */}
            <div className="bg-[#151A25] rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 bg-[#1a1f2e]/50">
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Report ID</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">User Profile</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Reason / Type</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">AI Confidence</th>
                            <th className="p-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {reports.map((report) => (
                            <tr key={report.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="p-5 font-mono text-gray-400 text-xs">#{report.id}</td>
                                <td className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold border border-gray-700">
                                            {report.user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">{report.user.name}</div>
                                            <div className="text-gray-500 text-xs">{report.user.role} • {report.user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="text-gray-200 font-medium text-sm">{report.type}</div>
                                    <div className="text-gray-500 text-xs">{report.reason}</div>
                                </td>
                                <td className="p-5">
                                    <span className={`px-2 py-1 rounded text-xs font-bold border ${getScoreColor(report.confidence)}`}>
                                        {report.confidence}% Match
                                    </span>
                                </td>
                                <td className="p-5 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => setSelectedReport(report)}
                                            className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white border border-blue-500/20 transition-all"
                                            title="View Details"
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/20 transition-all" title="Send Warning">
                                            <AlertTriangle size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 transition-all" title="Ban User">
                                            <UserX size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* User Details Modal */}
            {/* User Details Modal - Using Portal to escape parent overflow/stacking context */}
            {createPortal(
                <AnimatePresence>
                    {selectedReport && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedReport(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-[#151A25] border border-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl relative z-[101] overflow-hidden"
                            >
                                {/* Modal Header */}
                                <div className="p-6 border-b border-gray-800 flex justify-between items-start bg-[#1a1f2e]/50">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center text-2xl font-bold border border-gray-700 shadow-inner text-gray-400">
                                            {selectedReport.user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{selectedReport.user.name}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                                <span className="flex items-center gap-1"><Mail size={12} /> {selectedReport.user.email}</span>
                                                <span className="flex items-center gap-1"><Briefcase size={12} /> {selectedReport.user.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedReport(null)}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    {/* Risk Assessment */}
                                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex gap-4 items-start">
                                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-1">High Risk Assessment ({selectedReport.confidence}%)</h4>
                                            <p className="text-gray-400 text-sm">
                                                This user has been flagged for <strong>{selectedReport.reason}</strong>.
                                                The AI system tracked suspicious behavioral patterns matching known scams.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Evidence */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Captured Evidence</h4>
                                        <div className="space-y-3">
                                            {selectedReport.evidence.map((item, idx) => (
                                                <div key={idx} className="bg-[#0B0B15] border border-gray-800 p-4 rounded-lg font-mono text-sm text-gray-300">
                                                    <div className="text-xs text-blue-400 mb-1 uppercase font-bold">{item.type}</div>
                                                    "{item.content}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* User Context Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-[#0B0B15] border border-gray-800">
                                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Joined</div>
                                            <div className="text-white font-bold">{selectedReport.user.joined}</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#0B0B15] border border-gray-800">
                                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Location</div>
                                            <div className="text-white font-bold">{selectedReport.user.location}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="p-4 border-t border-gray-800 bg-[#1a1f2e]/30 flex justify-end gap-3">
                                    <button
                                        onClick={() => setSelectedReport(null)}
                                        className="px-4 py-2 rounded-lg text-gray-400 hover:text-white text-sm font-bold transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-bold transition-all flex items-center gap-2">
                                        <AlertTriangle size={16} /> Send Official Warning
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2">
                                        <Lock size={16} /> Ban User & Delete Data
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default AdminReports;
