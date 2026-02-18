import { Link, useOutletContext } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ApplicantRow, StatCard } from './RecruiterComponents';

export default function RecruiterDashboard() {
  const { setIsSidebarOpen } = useOutletContext();
  const { user } = useAuth();
  const firstName = user?.name ? user.name.split(' ')[0] : 'Recruiter';


  return (
    <>
      {/* Header */}
      <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 relative z-20">

        <div className="w-1/3 flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white mr-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-[#1f6b7a]/10 border border-[#1f6b7a]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[10px] font-bold text-[#1f6b7a] uppercase tracking-wider">System Optimal</span>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center text-center">
          <h1 className="text-sm sm:text-base font-bold text-white tracking-tight whitespace-nowrap">Welcome, {firstName}</h1>
          <p className="text-[10px] text-gray-400 hidden sm:block">Manage your hiring pipeline</p>
        </div>

        <div className="w-1/3 flex justify-end items-center gap-2 sm:gap-3">
          {/* Post Job Button Linked */}
          <Link to="/dashboard/recruiter/post-job">
            <button className="flex items-center gap-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all">
              <span className="material-symbols-outlined text-[14px]">add</span>
              <span className="hidden sm:inline">Post Job</span>
            </button>
          </Link>
          <div className="hidden sm:block h-6 w-[1px] bg-white/10 mx-1"></div>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg bg-[#1a1d23] border border-white/5 hover:border-white/10 transition-all">
            <span className="material-symbols-outlined text-[18px]">notifications</span>
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative z-10 custom-scrollbar">
        <div className="w-full space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon="work" label="Active Jobs" value="12" trend="2%" trendUp={true} />
            <StatCard icon="group_add" label="New Applicants" value="48" trend="12%" trendUp={true} />
            <StatCard icon="calendar_month" label="Interviews Today" value="06" />
            <StatCard icon="timelapse" label="Avg. Time to Hire" value="14d" trend="5%" trendUp={true} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
            <div className="xl:col-span-2">
              <div className="bg-[#21242c] rounded-xl border border-white/5 overflow-hidden shadow-md h-full flex flex-col">
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#1a1d23]/50">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#1f6b7a] text-[18px]">feed</span>
                    Applicant Feed
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-[10px] font-bold text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/5 transition-colors">Filter</button>
                    <button className="text-[10px] font-bold text-[#1f6b7a] px-2 py-1 rounded bg-[#1f6b7a]/10 border border-[#1f6b7a]/20 transition-colors">Export</button>
                  </div>
                </div>

                <div className="p-2 overflow-y-auto flex-1 min-h-[300px]">
                  <div className="hidden sm:flex justify-between px-3 py-2 text-[9px] font-bold text-gray-500 uppercase tracking-wider border-b border-white/5 mb-2">
                    <span className="w-1/3">Candidate</span>
                    <span className="w-1/6">Applied</span>
                    <span className="w-1/4">Status</span>
                    <span className="w-1/6 text-right">Match</span>
                    <span className="w-10"></span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <ApplicantRow name="John Doe" role="Senior Frontend Dev" applied="2m ago" score="98" status="New" statusColor="text-blue-400 border-blue-400/20 bg-blue-400/10" />
                    <ApplicantRow name="Alice Smith" role="Product Designer" applied="15m ago" score="94" status="Reviewing" statusColor="text-yellow-400 border-yellow-400/20 bg-yellow-400/10" />
                    <ApplicantRow name="Marcus Reed" role="DevOps Engineer" applied="1h ago" score="85" status="Interview" statusColor="text-purple-400 border-purple-400/20 bg-purple-400/10" />
                    <ApplicantRow name="Elena Lou" role="Marketing Lead" applied="3h ago" score="60" status="Screening" statusColor="text-gray-400 border-gray-400/20 bg-gray-400/10" />
                    <ApplicantRow name="David Chen" role="Backend Engineer" applied="5h ago" score="88" status="New" statusColor="text-blue-400 border-blue-400/20 bg-blue-400/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden shadow-md">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-sm font-bold text-white">Pipeline</h3>
                    <p className="text-[10px] text-gray-400">Weekly conversion</p>
                  </div>
                  <button className="text-gray-500 hover:text-[#1f6b7a] transition-colors"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
                </div>

                <div className="space-y-4 relative z-10">
                  {[
                    { label: 'Applied', count: 142, pct: '100%', color: 'bg-[#1f6b7a]' },
                    { label: 'Screened', count: 86, pct: '60%', color: 'bg-[#1f6b7a]' },
                    { label: 'Interview', count: 24, pct: '25%', color: 'bg-[#1f6b7a]' },
                    { label: 'Offer', count: 8, pct: '10%', color: 'bg-green-400' }
                  ].map((stage) => (
                    <div key={stage.label}>
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wide">
                        <span>{stage.label}</span>
                        <span className="text-white">{stage.count}</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#1a1d23] rounded-full overflow-hidden">
                        <div className={`h-full ${stage.color} opacity-80 rounded-full`} style={{ width: stage.pct }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 shadow-md">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Priority Tasks
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1d23] border border-white/5 hover:border-[#1f6b7a]/30 cursor-pointer transition-colors group">
                    <span className="material-symbols-outlined text-gray-500 group-hover:text-[#1f6b7a] text-[18px] mt-0.5">assignment_ind</span>
                    <div>
                      <p className="text-xs font-bold text-gray-200 group-hover:text-white">Review tech assessment</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Candidate: M. Johnson • Due Today</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1d23] border border-white/5 hover:border-[#1f6b7a]/30 cursor-pointer transition-colors group">
                    <span className="material-symbols-outlined text-gray-500 group-hover:text-[#1f6b7a] text-[18px] mt-0.5">send</span>
                    <div>
                      <p className="text-xs font-bold text-gray-200 group-hover:text-white">Send offer letter</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Candidate: Sarah K. • Due 2h</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
