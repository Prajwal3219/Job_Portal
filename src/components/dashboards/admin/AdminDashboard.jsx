import React from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import StatsGrid from './components/StatsGrid';
import { ReportsVolumeChart, FlagReasonsChart } from './components/AdminCharts';
import PriorityTaskList from './components/PriorityTaskList';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-[#0B0B15] font-sans selection:bg-[#33ddff] selection:text-[#0B0B15] text-gray-200">
            <AdminSidebar activePage="Moderation" />

            <main className="ml-64 min-h-screen flex flex-col relative">
                {/* Subtle background glow similar to the image's dark neomorphic feel */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#33ddff]/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                </div>

                <AdminHeader />

                <div className="flex-1 p-8 overflow-y-auto z-10 relative">
                    <StatsGrid />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2">
                            {/* Fixed height for chart area consistency */}
                            <div className="h-[400px]">
                                <ReportsVolumeChart />
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="h-[400px]">
                                <FlagReasonsChart />
                            </div>
                        </div>
                    </div>

                    <PriorityTaskList />
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;

