import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="relative overflow-hidden mask-linear-fade">
          <motion.div
            className="flex gap-12 sm:gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, idx) => (
              <div key={`${company.name}-${idx}`} className="flex items-center gap-2 font-bold text-lg text-white font-sans group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-primary transition-colors duration-500">{company.icon}</span>
                <span className="group-hover:text-white transition-colors duration-500">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;