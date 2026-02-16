import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    MapPin, Users, Building, CheckCircle2, Globe, Heart, Monitor,
    Briefcase, Calendar, Twitter, Linkedin, ExternalLink, ArrowRight,
    Code2, Server, Database, Cloud, Zap, Shield, BookOpen
} from 'lucide-react';

const CompanyProfile = () => {
    const { setSidebarOpen } = useOutletContext();

    // Mock Data
    const techStack = [
        { name: 'React', icon: <Code2 size={20} /> },
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
        { name: 'AWS', icon: <Cloud size={20} /> },
        { name: 'TypeScript', icon: <Code2 size={20} /> },
        { name: 'Redis', icon: <Zap size={20} /> },
    ];

    const openRoles = [
        { title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time', salary: '$140k - $160k', tags: ['React', 'TS'] },
        { title: 'Backend Developer', location: 'New York, NY', type: 'Full-time', salary: '$130k - $150k', tags: ['Node', 'Go'] },
        { title: 'Product Designer', location: 'Remote', type: 'Full-time', salary: '$110k - $130k', tags: ['Figma', 'UI/UX'] },
    ];

    const perks = [
        { label: 'Remote Work', icon: <Monitor size={16} /> },
        { label: 'Health Insurance', icon: <Heart size={16} /> },
        { label: 'Unlimited PTO', icon: <Calendar size={16} /> },
        { label: 'Learning Budget', icon: <BookOpen size={16} /> },
    ];

    return (
        <>
            {/* Header */}
            <header className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-[#15171c]/95 backdrop-blur-md relative z-20">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-xl font-bold text-white tracking-tight">Company Profile</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-2 text-gray-400 hover:text-white rounded-lg bg-[#1a1d23] border border-white/5 transition-all">
                        <Globe size={18} />
                    </button>
                    <button className="px-4 py-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-[#1f6b7a]/20">
                        Follow
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative z-10 custom-scrollbar bg-[#15171c]">

                {/* Banner / Hero Section */}
                <div className="relative rounded-2xl overflow-hidden mb-8 group">
                    <div className="h-48 md:h-64 bg-gradient-to-r from-[#0f1115] to-[#1a1d23] relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1f6b7a_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15171c] to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end gap-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#21242c] border-4 border-[#15171c] shadow-2xl flex items-center justify-center relative z-10">
                            <Building size={48} className="text-[#1f6b7a]" />
                        </div>
                        <div className="flex-1 mb-2">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Acme Corp</h1>
                            <p className="text-gray-400 text-sm md:text-base max-w-2xl">Building the next generation of cloud infrastructure for the modern web.</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors pointer-events-auto">
                                <Monitor size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/20 transition-colors pointer-events-auto">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-[#1da1f2]/10 hover:bg-[#1da1f2]/20 text-[#1da1f2] border border-[#1da1f2]/20 transition-colors pointer-events-auto">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Main Content Column (Left) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Section 1: About Us */}
                        <div className="bg-[#21242c] rounded-2xl border border-white/5 p-6 md:p-8 shadow-lg relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1f6b7a]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Users className="text-[#1f6b7a]" size={24} />
                                About Us
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                                <p>
                                    At Acme Corp, we believe that the future of technology lies in seamless integration and user-centric design. Founded in 2018, we have grown from a small garage startup to a global team of over 200 passionate engineers, designers, and thinkers.
                                </p>
                                <p>
                                    Our mission is to democratize access to powerful cloud computing resources. We are driven by a culture of innovation, collaboration, and continuous learning. We value transparency, inclusivity, and the courage to take risks.
                                </p>
                                <p>
                                    Joining our team means working on challenging problems that impact millions of users worldwide. We foster an environment where your voice is heard, and your contributions truly matter.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Our Tech Stack */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Code2 className="text-[#1f6b7a]" size={24} />
                                Our Tech Stack
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                {techStack.map((tech, idx) => (
                                    <div key={idx} className="bg-[#21242c] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#1f6b7a]/5 hover:border-[#1f6b7a]/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                                        <div className="text-gray-400 group-hover:text-[#1f6b7a] transition-colors bg-[#1a1d23] p-3 rounded-lg border border-white/5">
                                            {tech.icon}
                                        </div>
                                        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 3: Open Roles */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Briefcase className="text-[#1f6b7a]" size={24} />
                                    Open Roles
                                </h2>
                                <button className="text-sm font-bold text-[#1f6b7a] hover:text-white transition-colors flex items-center gap-1">
                                    View All Jobs <ArrowRight size={16} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {openRoles.map((role, idx) => (
                                    <div key={idx} className="bg-[#21242c] border border-white/5 rounded-xl p-5 hover:border-[#1f6b7a]/50 transition-all duration-300 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1f6b7a]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-[#1f6b7a] transition-colors mb-2">{role.title}</h3>
                                                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                                                    <div className="flex items-center gap-1.5 bg-[#1a1d23] px-2.5 py-1 rounded-md border border-white/5">
                                                        <MapPin size={12} /> {role.location}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 bg-[#1a1d23] px-2.5 py-1 rounded-md border border-white/5">
                                                        <Briefcase size={12} /> {role.type}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 bg-[#1f6b7a]/10 text-[#1f6b7a] px-2.5 py-1 rounded-md border border-[#1f6b7a]/20 font-bold">
                                                        <span className="material-symbols-outlined text-[12px]">payments</span> {role.salary}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="hidden md:flex gap-2">
                                                    {role.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] bg-[#1a1d23] text-gray-500 border border-white/5 px-2 py-1 rounded-md">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <button className="bg-white/5 hover:bg-[#1f6b7a] hover:text-white text-gray-300 text-sm font-bold py-2.5 px-6 rounded-lg border border-white/10 hover:border-[#1f6b7a] transition-all whitespace-nowrap">
                                                    View Role
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar Column */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Widget 1: Company Overview */}
                        <div className="bg-[#21242c] rounded-2xl border border-white/5 p-6 shadow-lg shadow-black/20">
                            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                                <Building size={18} className="text-[#1f6b7a]" />
                                Company Overview
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1d23] border border-white/5">
                                    <span className="text-sm text-gray-400 flex items-center gap-2"><Calendar size={14} /> Founded</span>
                                    <span className="text-sm font-bold text-white">2018</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1d23] border border-white/5">
                                    <span className="text-sm text-gray-400 flex items-center gap-2"><MapPin size={14} /> HQ</span>
                                    <span className="text-sm font-bold text-white">San Francisco, CA</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1d23] border border-white/5">
                                    <span className="text-sm text-gray-400 flex items-center gap-2"><Users size={14} /> Employees</span>
                                    <span className="text-sm font-bold text-white">200-500</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1d23] border border-white/5">
                                    <span className="text-sm text-gray-400 flex items-center gap-2"><Globe size={14} /> Website</span>
                                    <a href="#" className="text-sm font-bold text-[#1f6b7a] hover:underline flex items-center gap-1">
                                        acmecorp.com <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Widget 2: Perks & Benefits */}
                        <div className="bg-[#21242c] rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                            {/* Ambient Glow Widget 3 */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#1f6b7a]/10 blur-[50px] pointer-events-none rounded-full"></div>

                            <div className="relative z-10">
                                <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                                    <Heart size={18} className="text-[#1f6b7a]" />
                                    Perks & Benefits
                                </h3>

                                <div className="grid grid-cols-1 gap-3">
                                    {perks.map((perk, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1d23]/80 border border-white/5 hover:border-[#1f6b7a]/30 transition-colors group">
                                            <div className="w-8 h-8 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] group-hover:bg-[#1f6b7a] group-hover:text-white transition-all duration-300">
                                                {perk.icon}
                                            </div>
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{perk.label}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1d23]/80 border border-white/5 hover:border-[#1f6b7a]/30 transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] group-hover:bg-[#1f6b7a] group-hover:text-white transition-all duration-300">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">401k Matching</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact/CTA Widget */}
                        <div className="bg-gradient-to-br from-[#1f6b7a]/20 to-[#21242c] rounded-2xl border border-[#1f6b7a]/20 p-6 text-center">
                            <h3 className="text-lg font-bold text-white mb-2">Interested in us?</h3>
                            <p className="text-xs text-gray-400 mb-4">Follow us to get notified when new roles open up.</p>
                            <button className="w-full py-3 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white font-bold rounded-xl shadow-lg shadow-[#1f6b7a]/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                Follow Company
                            </button>
                        </div>

                    </div>

                </div>
            </main>
        </>
    );
};
// End of component
export default CompanyProfile;
