import React from 'react';

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              ML-Powered Capabilities
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Our platform uses advanced machine learning to ensure every match is authentic and verified.
            </p>
          </div>
          <button className="text-primary hover:text-white font-bold flex items-center gap-2 transition-colors">
            View all features <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* GRID FIX: 
           1. auto-rows ensures consistent heights.
           2. md:grid-cols-3 enables the 3-column layout on desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Skill Verification (Tall Card) 
             - md:col-span-2: Takes 2 columns width
             - md:row-span-2: Takes 2 rows height (Crucial for the sidebar look)
          */}
          <div className="
            md:col-span-2 md:row-span-2 
            bg-surface-dark rounded-2xl border border-white/5 p-6 sm:p-8 
            relative overflow-hidden group hover:border-primary/30 transition-all 
            flex flex-col justify-between
          ">
            <div className="absolute inset-0 bg-card-gradient"></div>
            <div className="relative z-10">
              <div className="size-12 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(31,107,122,0.3)]">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Skill Verification Engine</h3>
              <p className="text-gray-400 max-w-md">Real-time code assessments and portfolio analysis to validate claims with 99.9% accuracy.</p>
            </div>
            
            {/* Visual Element at Bottom */}
            <div className="w-full h-auto min-h-[80px] mt-6 rounded-lg bg-[#1a1d23] border border-white/5 p-4 flex items-center gap-4 relative z-10">
              <div className="size-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-gray-400">person</span>
              </div>
              <div className="flex-1">
                <div className="h-2 w-1/3 bg-gray-700 rounded mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-600 rounded"></div>
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded font-mono">VERIFIED</div>
            </div>
          </div>

          {/* Card 2: Fraud Detection (Small Card Top-Right) */}
          <div className="
            md:col-span-1 md:row-span-1
            bg-surface-dark rounded-2xl border border-white/5 p-6 sm:p-8 
            relative overflow-hidden group hover:border-primary/30 transition-all
          ">
            <div className="absolute inset-0 bg-card-gradient"></div>
            <div className="relative z-10">
              <div className="size-12 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">policy</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fraud Detection</h3>
              <p className="text-gray-400 text-sm">Advanced pattern recognition blocks resume fraud.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full"></div>
          </div>

          {/* Card 3: ML Matching (Small Card Bottom-Right) 
             This will naturally fall into the empty slot under Card 2
          */}
          <div className="
            md:col-span-1 md:row-span-1
            bg-surface-dark rounded-2xl border border-white/5 p-6 sm:p-8 
            relative overflow-hidden group hover:border-primary/30 transition-all
          ">
            <div className="absolute inset-0 bg-card-gradient"></div>
            <div className="relative z-10">
              <div className="size-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ML Matching</h3>
              <p className="text-gray-400 text-sm">Smart algorithms that match potential with opportunity.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full"></div>
          </div>

          {/* Card 4: Wide Bottom Card (Instant Hiring) 
             - md:col-span-3: Spans full width at the bottom
          */}
          <div className="
            md:col-span-3 md:row-span-1
            bg-surface-dark rounded-2xl border border-white/5 p-6 sm:p-8 
            flex flex-col md:flex-row items-center gap-8 
            relative overflow-hidden group hover:border-primary/30 transition-all
          ">
            <div className="absolute inset-0 bg-card-gradient"></div>
            <div className="relative z-10 flex-1 w-full">
              <div className="size-12 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Instant Hiring Flows</h3>
              <p className="text-gray-400">Reduce time-to-hire by 60% with automated flows.</p>
            </div>
            <div className="relative z-10 flex-1 w-full flex justify-end">
              <div className="w-full max-w-sm bg-[#1a1d23] rounded-lg border border-white/5 p-4 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 font-mono">TIME SAVED</span>
                  <span className="text-xs text-green-400 font-bold">+14h/candidate</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  <div className="w-1/6 bg-gray-700 h-[40%] rounded-t"></div>
                  <div className="w-1/6 bg-gray-700 h-[60%] rounded-t"></div>
                  <div className="w-1/6 bg-gray-700 h-[50%] rounded-t"></div>
                  <div className="w-1/6 bg-primary/50 h-[80%] rounded-t"></div>
                  <div className="w-1/6 bg-primary h-[100%] rounded-t"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;