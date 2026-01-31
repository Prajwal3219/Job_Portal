import React from 'react';

const trustedCompanies = [
  { icon: 'diamond', name: 'AcmeCorp' },
  { icon: 'change_history', name: 'Vertex' },
  { icon: 'hexagon', name: 'HexaTech' },
  { icon: 'code_blocks', name: 'StackFlow' },
  { icon: 'blur_on', name: 'Nebula' },
];

const TrustedBy = () => {
  return (
    <section className="py-12 border-y border-white/5 relative bg-[#0B0B15]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-bold text-gray-500 mb-8 uppercase tracking-[0.2em] font-sans">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8 opacity-50 hover:opacity-100 transition-opacity duration-700">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="flex items-center gap-2 font-bold text-lg text-white font-sans group cursor-default">
              <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-primary transition-colors duration-500">{company.icon}</span>
              <span className="group-hover:text-white transition-colors duration-500">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;