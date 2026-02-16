import React from 'react';
import { motion } from 'framer-motion';

const trustedCompanies = [
  { icon: 'diamond', name: 'AcmeCorp' },
  { icon: 'change_history', name: 'Vertex' },
  { icon: 'hexagon', name: 'HexaTech' },
  { icon: 'code_blocks', name: 'StackFlow' },
  { icon: 'blur_on', name: 'Nebula' },
  { icon: 'bolt', name: 'QuantumBit' },
  { icon: 'cloud', name: 'SkyNet' },
  { icon: 'memory', name: 'CyberDyne' },
  { icon: 'public', name: 'OmniCorp' },
  { icon: 'umbrella', name: 'Umbrella' },
  { icon: 'language', name: 'Globex' },
  { icon: 'print', name: 'Initech' },
];

const TrustedBy = () => {
  return (
    <section className="py-12 border-y border-white/5 relative bg-[#0B0B15]/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">
          Trusted by forward-thinking teams
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Gradient Masks for Fade Effect at Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0B15] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0B15] to-transparent z-10"></div>

        {/* Animated Track */}
        <motion.div
          className="flex items-center gap-16 sm:gap-24 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          {/* Render the list twice for seamless loop */}
          {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex items-center gap-3 font-bold text-lg text-white font-sans whitespace-nowrap group cursor-default shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300">{company.icon}</span>
              <span className="text-xl font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors duration-300">{company.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;