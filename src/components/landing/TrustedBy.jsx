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
    <section className="py-10 border-y border-white/5 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="material-symbols-outlined text-2xl">{company.icon}</span>
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;