import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    Calendar as CalendarIcon, Clock, Video, FileText, Search, Filter,
    CheckCircle, AlertCircle, MoreVertical, ChevronLeft, ChevronRight, Star,
    User, MapPin, Phone, Mail
} from 'lucide-react';

const RecruiterInterviews = () => {
    const context = useOutletContext();
    const setSidebarOpen = context.setSidebarOpen || context.setIsSidebarOpen; // Handle context format difference

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Mock Data
    const metrics = [
        { label: 'Interviews Today', value: '8', icon: <Video size={24} />, color: 'text-[#1f6b7a]', bg: 'bg-[#1f6b7a]/10', border: 'border-[#1f6b7a]/20' },
        { label: 'Pending Scorecards', value: '3', icon: <AlertCircle size={24} />, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
        { label: 'Reschedule Requests', value: '2', icon: <Clock size={24} />, color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/20' },
    ];

    const upcomingInterviews = [
        {
            id: 1,
            candidate: 'Alex Chen',
            role: 'Senior Frontend Engineer',
            round: 'Round 2: Technical Assessment',
            time: '10:00 AM - 11:00 AM',
            date: 'Today, Oct 24',
            image: null, // text avatar fallback
            status: 'Upcoming'
        },
        {
            id: 2,
            candidate: 'Sarah Williams',
            role: 'Product Designer',
            round: 'Round 1: Initial Screening',
            time: '11:30 AM - 12:00 PM',
            date: 'Today, Oct 24',
            image: null,
            status: 'Upcoming'
        },
        {
            id: 3,
            candidate: 'Michael Brown',
            role: 'Backend Developer',
            round: 'Round 3: System Design',
            time: '2:00 PM - 3:00 PM',
            date: 'Today, Oct 24',
            image: null,
            status: 'Upcoming'
        },
        {
            id: 4,
            candidate: 'Emily Davis',
            role: 'Marketing Manager',
            round: 'Round 1: Culture Fit',
            time: '4:00 PM - 4:30 PM',
            date: 'Tomorrow, Oct 25',
            image: null,
            status: 'Scheduled'
        }
    ];

    const pendingScorecards = [
        { id: 101, candidate: 'David Lee', role: 'DevOps Engineer', time: 'Yesterday', status: 'Pending' },
        { id: 102, candidate: 'Jessica Taylor', role: 'QA Automation', time: 'Yesterday', status: 'Pending' },
        { id: 103, candidate: 'Ryan Wilson', role: 'Full Stack Dev', time: '2 days ago', status: 'Pending' },
    ];

    // Calendar Helper (Simplified)
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
    const currentDay = 24;

    return (
        <div className="flex flex-col h-full bg-[#15171c] text-white overflow-hidden">
            {/* Header */}
            <header className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-[#15171c] relative z-20">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-xl font-bold text-white tracking-tight">Interviews</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 bg-[#1a1d23] border border-white/5 rounded-lg px-3 py-2">
                        <span className="text-sm text-gray-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>
            </header>

            {/* Main Content Scrollable Area */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar relative z-10">

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className={`bg-[#1a1d23] border ${metric.border} rounded-xl p-5 flex items-center justify-between shadow-lg`}>
                            <div>
                                <p className="text-gray-400 text-sm font-medium mb-1">{metric.label}</p>
                                <h3 className="text-3xl font-bold text-white tracking-tight">{metric.value}</h3>
                            </div>
                            <div className={`w-12 h-12 rounded-lg ${metric.bg} flex items-center justify-center ${metric.color}`}>
                                {metric.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">

                    {/* Left Column: Upcoming Schedule (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">

                        {/* Search & Filter Toolbar */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2 self-start sm:self-center">
                                <CalendarIcon size={20} className="text-[#1f6b7a]" />
                                Upcoming Schedule
                            </h2>
                            <div className="flex w-full sm:w-auto gap-3">
                                <div className="relative flex-1 sm:w-64 group">
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1f6b7a] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search candidate or role..."
                                        className="w-full bg-[#0f1115] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:border-[#1f6b7a] focus:ring-1 focus:ring-[#1f6b7a] outline-none transition-all"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button className="px-4 py-2.5 bg-[#1a1d23] hover:bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all flex items-center gap-2 text-sm font-medium">
                                    <Filter size={18} />
                                    <span className="hidden sm:inline">Filter</span>
                                </button>
                            </div>
                        </div>

                        {/* Interview List */}
                        <div className="space-y-4">
                            {upcomingInterviews.map((interview) => (
                                <div key={interview.id} className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl p-5 hover:border-[#1f6b7a]/30 transition-all duration-300 group flex flex-col md:flex-row gap-5 items-start md:items-center">

                                    {/* Time Column */}
                                    <div className="min-w-[140px] flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-1 text-gray-400 border-b md:border-b-0 md:border-r border-white/5 pb-3 md:pb-0 md:pr-5 w-full md:w-auto">
                                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                                            <Clock size={16} className="text-[#1f6b7a]" />
                                            {interview.time.split(' - ')[0]}
                                        </div>
                                        <span className="text-xs">{interview.date}</span>
                                        <span className="text-xs bg-[#1f6b7a]/10 text-[#1f6b7a] px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide mt-1 hidden md:inline-block">
                                            {interview.status}
                                        </span>
                                    </div>

                                    {/* Info Column */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                                                    {interview.candidate.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white truncate">{interview.candidate}</h3>
                                                    <p className="text-xs text-gray-400 truncate">{interview.role}</p>
                                                </div>
                                            </div>
                                            <button className="md:hidden text-gray-500">
                                                <MoreVertical size={20} />
                                            </button>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-gray-300 border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                                            {interview.round}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                                        <button className="flex-1 md:flex-none py-2 px-4 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg text-sm font-medium transition-all">
                                            Resumé
                                        </button>
                                        <button className="flex-1 md:flex-none py-2 px-5 bg-[#1f6b7a] hover:bg-[#185662] text-white rounded-lg text-sm font-bold shadow-lg shadow-[#1f6b7a]/20 hover:shadow-[#1f6b7a]/40 transition-all flex items-center justify-center gap-2">
                                            <Video size={16} />
                                            Join Call
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sidebar (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Widget 1: Mini Calendar */}
                        <div className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-white text-base">October 2024</h3>
                                <div className="flex gap-1">
                                    <button className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><ChevronLeft size={18} /></button>
                                    <button className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"><ChevronRight size={18} /></button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                    <span key={d} className="text-gray-500 font-bold uppercase">{d}</span>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={`empty-${i}`} className="aspect-square"></div>
                                ))}
                                {daysInMonth.map(day => {
                                    const isToday = day === currentDay;
                                    const hasEvent = [24, 25, 28].includes(day);
                                    return (
                                        <button
                                            key={day}
                                            className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm relative transition-all
                                                ${isToday
                                                    ? 'bg-[#1f6b7a] text-white font-bold shadow-lg shadow-[#1f6b7a]/30'
                                                    : 'text-gray-300 hover:bg-white/5'
                                                }
                                            `}
                                        >
                                            {day}
                                            {hasEvent && !isToday && (
                                                <span className="w-1 h-1 rounded-full bg-[#1f6b7a] absolute bottom-1.5"></span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Widget 2: Pending Scorecards */}
                        <div className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl p-6 shadow-lg flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-white text-base flex items-center gap-2">
                                    <AlertCircle size={18} className="text-yellow-500" />
                                    Action Required
                                </h3>
                                <span className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-full font-medium">3 Pending</span>
                            </div>

                            <div className="space-y-4">
                                {pendingScorecards.map(card => (
                                    <div key={card.id} className="p-4 rounded-xl bg-[#0f1115] border border-white/5 hover:border-yellow-500/30 transition-all group">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{card.candidate}</h4>
                                                <p className="text-xs text-gray-500">{card.role}</p>
                                            </div>
                                            <span className="text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">{card.time}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <Star key={star} size={14} className="text-gray-700 group-hover:text-gray-600 transition-colors" />
                                                ))}
                                            </div>
                                            <button className="text-xs font-bold text-yellow-500 hover:text-yellow-400 flex items-center gap-1 transition-colors">
                                                Rate <ChevronRight size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-4 py-2.5 rounded-lg border border-dashed border-gray-700 text-gray-500 text-sm font-medium hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
                                View all tasks
                            </button>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
};

export default RecruiterInterviews;
