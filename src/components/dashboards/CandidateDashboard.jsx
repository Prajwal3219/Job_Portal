import React from 'react';

const CandidateDashboard = () => {
  return (
    <div className="relative min-h-screen w-full bg-background-dark text-white font-body overflow-x-hidden">
      
      {/* Ambient Background Mesh - Darker */}
      <div className="absolute inset-0 bg-cosmic-mesh opacity-80 pointer-events-none z-0"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white drop-shadow-md">WELCOME BACK, ALEX</h2>
            <p className="text-sm text-gray-400 font-display tracking-wider uppercase mt-1">Let's find your next big opportunity</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <input 
                className="w-full bg-navy-sidebar border border-white/5 rounded-full pl-10 pr-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 shadow-inner" 
                placeholder="Search jobs, skills..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">search</span>
            </div>
            <button className="relative p-2.5 rounded-full bg-navy-sidebar border border-white/5 hover:bg-white/5 text-gray-400 hover:text-white transition-colors shadow-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#00e6bf]"></span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-card-depth/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/20 transition-all shadow-xl">
            <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">pie_chart</span>
            </div>
            <h3 className="text-gray-500 font-display text-xs font-bold uppercase tracking-widest mb-2">Profile Completion</h3>
            <div className="flex items-end gap-3 relative z-10">
              <span className="text-5xl font-bold font-display text-white tracking-tight">75%</span>
              <span className="text-primary text-sm font-bold mb-2 drop-shadow-[0_0_8px_rgba(0,230,191,0.6)]">Almost there</span>
            </div>
            <div className="w-full bg-[#0f0f1a] h-2 rounded-full mt-5 overflow-hidden border border-white/5">
              <div className="h-full bg-primary w-[75%] rounded-full shadow-[0_0_12px_#00e6bf]"></div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-card-depth/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-400/20 transition-all shadow-xl">
            <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-blue-400">send</span>
            </div>
            <h3 className="text-gray-500 font-display text-xs font-bold uppercase tracking-widest mb-2">Total Applications</h3>
            <div className="flex items-end gap-3 relative z-10">
              <span className="text-5xl font-bold font-display text-white tracking-tight">12</span>
              <span className="text-green-400 text-sm font-bold mb-2 flex items-center bg-green-400/10 px-2 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                +2 this week
              </span>
            </div>
            <div className="mt-5 flex -space-x-3 overflow-hidden pl-1">
              {['G', 'M', 'U'].map((letter, i) => (
                 <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-[#1E2330] flex items-center justify-center text-[10px] font-bold text-white shadow-lg ${i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-sky-500' : 'bg-gray-800'}`}>
                   {letter}
                 </div>
              ))}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-card-depth/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-400/20 transition-all shadow-xl">
            <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-purple-400">event</span>
            </div>
            <h3 className="text-gray-500 font-display text-xs font-bold uppercase tracking-widest mb-2">Interviews</h3>
            <div className="flex items-end gap-3 relative z-10">
              <span className="text-5xl font-bold font-display text-white tracking-tight">3</span>
              <span className="text-purple-400 text-sm font-bold mb-2 bg-purple-400/10 px-2 py-0.5 rounded">Upcoming</span>
            </div>
            <div className="mt-5 text-xs text-gray-400 flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#00e6bf]"></span>
              Next: Technical Round w/ Stripe in 2d
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column: Chart & Jobs */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Activity Chart */}
            <div className="bg-card-depth/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Application Activity</h3>
                  <p className="text-xs text-gray-400 mt-1">Last 30 days performance</p>
                </div>
                <select className="bg-navy-sidebar border border-white/10 text-xs text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-white/20">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>
              
              {/* CSS Bar Chart */}
              <div className="h-56 w-full flex items-end justify-between gap-3 px-2 relative">
                 {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-full border-t border-dashed border-white"></div>)}
                </div>
                
                {/* Bars */}
                {[
                  { h: '30%', val: 2 }, { h: '45%', val: 5 }, { h: '25%', val: 3 }, 
                  { h: '60%', val: 8 }, { h: '50%', val: 6 }, { h: '80%', val: 12 }, 
                  { h: '40%', val: 4, active: true }
                ].map((bar, i) => (
                  <div key={i} className={`w-full rounded-t transition-all duration-300 relative group cursor-pointer ${bar.active ? 'bg-gradient-to-t from-primary/10 to-primary shadow-[0_0_20px_rgba(0,230,191,0.2)]' : 'bg-[#2A3040] hover:bg-[#353C4F]'}`} style={{ height: bar.h }}>
                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-lg ${bar.active ? 'bg-primary text-black' : 'bg-white text-black'}`}>
                      {bar.val}
                      <div className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${bar.active ? 'bg-primary' : 'bg-white'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] text-gray-500 font-display uppercase tracking-widest px-1">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Recommended Jobs */}
            <div>
              <div className="flex items-center justify-between mb-6 px-1">
                <h2 className="font-display font-bold text-xl tracking-wide text-white">RECOMMENDED JOBS</h2>
                <a className="text-sm text-primary hover:text-white transition-colors flex items-center gap-1 group cursor-pointer font-medium">
                  View all 
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              
              <div className="space-y-4">
                {/* Job 1 */}
                <JobCard 
                  logo="https://logo.clearbit.com/google.com" 
                  role="UX Designer Intern" 
                  company="Google" 
                  location="Mountain View, CA" 
                  match="98%" 
                  salary="$45 - $60 / hr" 
                  tags={['Remote Friendly', 'Design']}
                  primaryAction={true}
                />
                 {/* Job 2 */}
                 <JobCard 
                  logo="https://logo.clearbit.com/tesla.com" 
                  role="Frontend Engineer" 
                  company="Tesla" 
                  location="Austin, TX" 
                  match="85%" 
                  salary="$110k - $140k" 
                  tags={['Full-time', 'React']}
                  logoInvert={true}
                />
                 {/* Job 3 */}
                 <JobCard 
                  logo="https://logo.clearbit.com/instagram.com" 
                  role="Product Manager Assoc." 
                  company="Instagram" 
                  location="New York, NY" 
                  match="92%" 
                  salary="$125k - $150k" 
                  tags={['Hybrid', 'Product']}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Extras */}
          <div className="space-y-6">
            
            {/* Upcoming Events */}
            <div className="bg-navy-sidebar border border-white/5 rounded-2xl p-6 shadow-xl">
              <h3 className="font-display font-bold text-white mb-6 flex items-center gap-2 text-sm tracking-wide">
                <span className="material-symbols-outlined text-primary">calendar_month</span> 
                UPCOMING
              </h3>
              <div className="space-y-6">
                <EventRow date="24" month="Oct" title="Mock Interview" sub="10:00 AM • Zoom" status="Confirmed" />
                <div className="w-full border-t border-white/5"></div>
                <EventRow date="28" month="Oct" title="Career Fair Prep" sub="2:00 PM • Hall B" />
              </div>
              <button className="w-full mt-6 text-xs text-gray-400 hover:text-white border border-white/10 hover:bg-white/5 py-3 rounded-xl transition-colors font-medium">View Calendar</button>
            </div>

            {/* Skill Boost */}
            <div className="bg-card-depth/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-xl">
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
               <h3 className="font-display font-bold text-white mb-4 relative z-10 text-sm tracking-wide">SKILL BOOST</h3>
               <p className="text-xs text-gray-400 mb-6 relative z-10 leading-relaxed">Skills missing from your dream jobs:</p>
               
               <div className="space-y-5 relative z-10">
                 <SkillBar skill="TypeScript" progress="20%" color="bg-red-500" shadow="shadow-red-500/50" />
                 <SkillBar skill="Figma" progress="45%" color="bg-yellow-500" shadow="shadow-yellow-500/50" />
               </div>
            </div>

            {/* Premium Ad */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-primary to-purple-600 shadow-lg shadow-primary/10">
              <div className="bg-[#151A25] rounded-2xl p-5 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Go Premium</h4>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">Get seen by recruiters 3x faster with a highlighted profile.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---

const JobCard = ({ logo, role, company, location, match, salary, tags, primaryAction, logoInvert }) => (
  <div className="group bg-[#1E2330] hover:bg-[#252B3B] border border-white/5 hover:border-primary/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center relative z-10">
      <div className="flex gap-4 items-center">
        <div className={`size-14 rounded-xl ${logoInvert ? 'bg-black' : 'bg-white'} flex items-center justify-center p-2.5 flex-shrink-0 shadow-lg`}>
          <img alt={`${company} Logo`} class={`w-full h-full object-contain ${logoInvert ? 'invert' : ''}`} src={logo} />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">{role}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-400 mt-1.5 font-medium">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">apartment</span> {company}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">location_on</span> {location}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1.5 w-full md:w-auto justify-between md:justify-end">
        <div className={`flex items-center gap-2 border px-3 py-1 rounded-full ${primaryAction ? 'bg-primary/10 border-primary/20 shadow-[0_0_10px_rgba(0,230,191,0.1)]' : 'bg-gray-800 border-white/5'}`}>
          {primaryAction && <span className="material-symbols-outlined text-primary text-sm animate-pulse">bolt</span>}
          <span className={`font-bold text-sm ${primaryAction ? 'text-primary' : 'text-gray-400'}`}>{match} Match</span>
        </div>
        <span className="text-gray-400 text-xs font-medium">{salary}</span>
      </div>
    </div>
    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-[#2A3040] rounded-md text-xs text-gray-300 border border-white/5 font-medium">{tag}</span>
        ))}
      </div>
      <button className={`${primaryAction ? 'bg-primary hover:bg-[#00ffd4] text-black shadow-[0_0_20px_rgba(0,230,191,0.4)] hover:shadow-[0_0_30px_rgba(0,230,191,0.6)]' : 'bg-[#2A3040] hover:bg-[#353C4F] text-white border border-white/5'} font-bold text-sm px-6 py-2.5 rounded-lg transition-all`}>
        {primaryAction ? 'Apply Now' : 'Details'}
      </button>
    </div>
  </div>
);

const EventRow = ({ date, month, title, sub, status }) => (
  <div className="flex gap-4 group cursor-pointer">
    <div className="flex flex-col items-center bg-[#2A3040] rounded-lg px-3 py-2 h-fit min-w-[55px] border border-white/5 group-hover:border-primary/30 transition-colors">
      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{month}</span>
      <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">{date}</span>
    </div>
    <div>
      <p className="text-sm font-bold text-white leading-tight group-hover:text-primary transition-colors">{title}</p>
      <p className="text-xs text-gray-500 mt-1 font-medium">{sub}</p>
      {status && <span className="inline-block mt-1.5 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/10">{status}</span>}
    </div>
  </div>
);

const SkillBar = ({ skill, progress, color, shadow }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2.5">
        <div className={`size-2.5 rounded-full ${color} shadow-[0_0_8px] ${shadow}`}></div>
        <span className="text-sm text-gray-200 font-medium">{skill}</span>
      </div>
      <a className="text-[10px] text-primary hover:text-[#00ffd4] hover:underline cursor-pointer font-bold uppercase tracking-wider">Find Course</a>
    </div>
    <div className="w-full bg-[#151A25] h-1.5 rounded-full overflow-hidden border border-white/5">
      <div className={`h-full ${color} opacity-80`} style={{ width: progress }}></div>
    </div>
  </div>
);

export default CandidateDashboard;