import React from 'react';

const RecruiterDashboard = () => {
  return (
    <div className="flex h-screen w-full bg-background-dark text-slate-300 font-display selection:bg-recruiter-primary selection:text-background-dark overflow-hidden">
      
      {/* Sidebar: Control Tower */}
      <aside className="w-20 lg:w-64 flex-shrink-0 flex flex-col justify-between bg-[#111416] border-r border-white/5 h-full relative z-20">
        <div className="flex flex-col gap-8 p-4">
          {/* Logo Area */}
          <div className="flex items-center gap-3 px-2">
            <div className="relative flex items-center justify-center size-10 rounded-lg bg-recruiter-primary/10 border border-recruiter-primary/30 shadow-neon">
              <span className="material-symbols-outlined text-recruiter-primary text-2xl">hub</span>
            </div>
            <div className="hidden lg:flex flex-col">
              <h1 className="text-white text-lg font-bold tracking-tight">SkillHire</h1>
              <span className="text-[10px] text-recruiter-primary uppercase tracking-widest font-medium opacity-80">Console v2.0</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <NavItem icon="dashboard" label="Dashboard" active />
            <NavItem icon="work" label="Jobs" />
            <NavItem icon="group" label="Candidates" badge="12" />
            <NavItem icon="analytics" label="Analytics" />
            <NavItem icon="settings" label="Settings" />
          </nav>
        </div>
        
        {/* User Profile (Bottom) */}
        <div className="p-4 border-t border-white/5 bg-[#0f1113]">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div 
              className="size-10 rounded-full bg-cover bg-center border border-white/10 group-hover:border-recruiter-primary/50 transition-colors" 
              style={{ backgroundImage: "url('https://i.pravatar.cc/150?u=a042581f4e29026704d')" }}
            ></div>
            <div className="hidden lg:flex flex-col">
              <p className="text-sm font-medium text-white group-hover:text-recruiter-primary transition-colors">Alex Morgan</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                <span className="text-xs text-slate-500">Online</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-surface-dark relative">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#1c2e36] to-transparent opacity-40 pointer-events-none"></div>
        
        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 relative z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
            
            {/* Header Section */}
            <header className="flex flex-wrap justify-between items-end gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-recruiter-primary/60 text-xs font-mono uppercase tracking-[0.2em]">
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  <span>System Status: Optimal</span>
                  <span>•</span>
                  <span>Oct 24, 2023</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                   Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Alex</span>
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-4">
                  <span className="text-xs text-slate-500 font-mono uppercase">Next Interview</span>
                  <span className="text-sm text-white font-medium">10:30 AM • J. Chen</span>
                </div>
                <button className="relative overflow-hidden group bg-recruiter-primary/10 hover:bg-recruiter-primary/20 text-recruiter-primary border border-recruiter-primary/40 rounded-lg px-6 py-3 flex items-center gap-2 transition-all duration-300 shadow-neon">
                  <div className="absolute inset-0 bg-recruiter-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="material-symbols-outlined relative z-10 text-[20px]">add</span>
                  <span className="text-sm font-bold uppercase tracking-wider relative z-10">Post New Job</span>
                </button>
              </div>
            </header>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard label="Active Jobs" value="12" trend="2%" icon="north_east" hasGlowLine />
              <MetricCard label="New Applicants" value="48" trend="12%" activeDot />
              <MetricCard label="Interviews Today" value="06" subValue="/ 08 Total" isProgress />
              <MetricCard label="Avg. Time to Hire" value="14d" trend="-5%" trendDown icon="bolt" />
            </div>

            {/* Split Layout: Feed + Pipeline */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full min-h-[500px]">
              
              {/* Left: Applicant Feed */}
              <div className="xl:col-span-2 flex flex-col bg-card-dark rounded-lg border border-white/5 overflow-hidden tech-border shadow-inner-glow">
                <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-recruiter-primary">feed</span>
                    <h3 className="text-white font-bold text-lg">Applicant Feed</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-mono uppercase text-slate-300 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors">Filter</button>
                    <button className="px-3 py-1.5 text-xs font-mono uppercase text-recruiter-primary bg-recruiter-primary/10 hover:bg-recruiter-primary/20 rounded border border-recruiter-primary/20 transition-colors">Export Log</button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#1a1d20] text-xs uppercase font-mono text-slate-500 border-b border-white/5 sticky top-0">
                      <tr>
                        <th className="p-4 font-normal tracking-wider w-1/3">Candidate / Role</th>
                        <th className="p-4 font-normal tracking-wider">Applied</th>
                        <th className="p-4 font-normal tracking-wider">Status</th>
                        <th className="p-4 font-normal tracking-wider text-right">Match Score</th>
                        <th className="p-4 font-normal tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-white/5">
                      <ApplicantRow name="John Doe" role="Senior Frontend Engineer" initials="JD" time="2m" status="New" statusColor="blue" score="92%" />
                      <ApplicantRow name="Alice Smith" role="Product Designer" initials="AS" time="15m" status="Reviewing" statusColor="yellow" score="78%" />
                      <ApplicantRow name="Marcus Reed" role="DevOps Engineer" initials="MR" time="1h" status="Interview" statusColor="purple" score="85%" />
                      <ApplicantRow name="Elena Lou" role="Marketing Lead" initials="EL" time="3h" status="Screening" statusColor="slate" score="60%" />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right: Pipeline & Tasks */}
              <div className="flex flex-col gap-6">
                
                {/* Pipeline Card */}
                <div className="flex-1 bg-card-dark rounded-lg border border-white/5 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                  
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">Hiring Pipeline</h3>
                      <p className="text-slate-500 text-sm">Conversion rates this week</p>
                    </div>
                    <button className="text-recruiter-primary hover:text-white transition-colors"><span className="material-symbols-outlined">refresh</span></button>
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-4 mt-2">
                    <PipelineStage label="Applied" count="142" width="100%" color="bg-recruiter-primary" />
                    <Connector />
                    <PipelineStage label="Screened" count="86" width="60%" color="bg-recruiter-primary" />
                    <Connector />
                    <PipelineStage label="Interview" count="24" width="25%" color="bg-recruiter-primary" />
                    <Connector />
                    <PipelineStage label="Offer" count="8" width="10%" color="bg-green-400" glow />
                  </div>
                </div>

                {/* Priority Tasks */}
                <div className="bg-card-dark rounded-lg border border-white/5 p-6 tech-border shadow-inner-glow">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Priority Tasks
                  </h3>
                  <div className="flex flex-col gap-3">
                    <TaskItem icon="assignment_ind" title="Review tech assessment" desc="Candidate: M. Johnson • Due Today" />
                    <TaskItem icon="schedule_send" title="Send offer letter" desc="Candidate: Sarah K. • Due 2h" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub Components ---

const NavItem = ({ icon, label, badge, active }) => (
  <a className={`group flex items-center gap-3 px-3 py-3 rounded-lg relative overflow-hidden transition-all duration-300 ${active ? 'bg-recruiter-primary/10 border border-recruiter-primary/20' : 'hover:bg-white/5 hover:text-white text-slate-400'}`} href="#">
    {active && (
      <>
        <div className="absolute inset-0 bg-recruiter-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-recruiter-primary rounded-r-full shadow-neon"></div>
      </>
    )}
    <span className={`material-symbols-outlined transition-colors duration-300 ${active ? 'text-recruiter-primary group-hover:scale-110' : 'group-hover:text-recruiter-primary'}`}>{icon}</span>
    <span className={`hidden lg:block font-medium text-sm tracking-wide ${active ? 'text-white' : ''}`}>{label}</span>
    {badge && <span className="hidden lg:flex ml-auto bg-recruiter-primary/20 text-recruiter-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-recruiter-primary/20">{badge}</span>}
  </a>
);

const MetricCard = ({ label, value, trend, subValue, icon, hasGlowLine, activeDot, isProgress, trendDown }) => (
  <div className="bg-card-dark rounded-lg p-5 border border-white/5 relative group hover:border-recruiter-primary/30 transition-colors shadow-inner-glow">
    {activeDot && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-recruiter-primary animate-pulse shadow-neon"></div>}
    {icon && !activeDot && (
       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="material-symbols-outlined text-recruiter-primary text-sm">{icon}</span>
       </div>
    )}
    <p className="text-slate-400 text-sm font-medium font-mono uppercase tracking-wide">{label}</p>
    <div className="flex items-end gap-3 mt-2">
      <span className="text-4xl font-bold text-white group-hover:text-recruiter-primary transition-colors shadow-neon-text">{value}</span>
      {trend && (
        <span className={`${trendDown ? 'text-green-400' : 'text-green-400'} text-sm font-bold mb-1 flex items-center bg-green-400/10 px-1.5 rounded border border-green-400/20`}>
          <span className="material-symbols-outlined text-[12px] mr-0.5">{trendDown ? 'bolt' : 'trending_up'}</span> {trend}
        </span>
      )}
      {subValue && <span className="text-slate-500 text-sm font-normal mb-1">{subValue}</span>}
    </div>
    {isProgress && (
      <div className="w-full bg-white/5 h-1 mt-4 rounded-full overflow-hidden">
        <div className="h-full bg-recruiter-primary w-3/4 shadow-neon"></div>
      </div>
    )}
    {hasGlowLine && (
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-recruiter-primary/0 via-recruiter-primary/50 to-recruiter-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    )}
  </div>
);

const ApplicantRow = ({ name, role, initials, time, status, statusColor, score }) => {
  const colors = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    slate: 'bg-slate-500/10 border-slate-500/20 text-slate-400'
  };

  const barColors = {
    blue: 'bg-recruiter-primary',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-400',
    slate: 'bg-slate-400'
  };
  
  return (
    <tr className="group hover:bg-white/[0.02] transition-colors">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-white">{initials}</div>
          <div>
            <p className="text-white font-medium group-hover:text-recruiter-primary transition-colors">{name}</p>
            <p className="text-slate-500 text-xs">{role}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-slate-400 font-mono text-xs">{time} ago</td>
      <td className="p-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium uppercase tracking-wide ${colors[statusColor]}`}>
          {statusColor === 'blue' && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>}
          {status}
        </span>
      </td>
      <td className="p-4 text-right">
        <div className="inline-flex items-center gap-2">
          <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full w-[${score}] ${barColors[statusColor]} ${statusColor === 'blue' ? 'shadow-neon' : ''}`}></div>
          </div>
          <span className={`${statusColor === 'blue' ? 'text-recruiter-primary' : `text-${statusColor}-400`} font-mono font-bold`}>{score}</span>
        </div>
      </td>
      <td className="p-4 text-right">
        <button className="text-slate-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
      </td>
    </tr>
  );
}

const PipelineStage = ({ label, count, width, color, glow }) => (
  <div className="group">
    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400 uppercase">
      <span>{label}</span>
      <span className="text-white">{count}</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-sm overflow-hidden flex justify-center">
      <div 
        className={`h-full ${color} opacity-80 group-hover:opacity-100 transition-opacity ${glow ? 'shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'shadow-neon'}`} 
        style={{ width: width }}
      ></div>
    </div>
  </div>
);

const Connector = () => (
  <div className="h-4 w-full flex justify-center opacity-20">
    <div className="w-[1px] h-full bg-recruiter-primary"></div>
  </div>
);

const TaskItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/5 hover:border-recruiter-primary/30 cursor-pointer transition-colors group">
    <span className="material-symbols-outlined text-slate-400 group-hover:text-recruiter-primary text-[20px] mt-0.5">{icon}</span>
    <div>
      <p className="text-sm font-medium text-slate-200 group-hover:text-white">{title}</p>
      <p className="text-xs text-slate-500 mt-1">{desc}</p>
    </div>
  </div>
);

export default RecruiterDashboard;