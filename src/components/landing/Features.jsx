import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const TiltCard = ({ children, className, index, setHoveredIndex, hoveredIndex }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setHoveredIndex(index)}
      onMouseLeave={handleMouseLeave}
      className={`${className} cursor-pointer transition-all duration-500 ease-out ${hoveredIndex && hoveredIndex !== index ? 'blur-sm opacity-50 scale-[0.98]' : 'scale-100 opacity-100'}`}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
      {children}
    </motion.div>
  );
};

const featuresList = [
  { icon: 'psychology', title: 'AI Resume Parsing', desc: 'Instantly extract skills, experience, and education from any resume format.' },
  { icon: 'verified', title: 'Skill Verification', desc: 'Automated code tests and portfolio analysis to validate claimed skills.' },
  { icon: 'fingerprint', title: 'Fraud Detection', desc: 'Identify fake candidates and inflated resumes with 99.9% accuracy.' },
  { icon: 'hub', title: 'Smart Matching', desc: 'Connect with candidates who align with your company culture and tech stack.' },
  { icon: 'schedule', title: 'Auto-Scheduling', desc: 'AI coordinates interviews between recruiters and candidates seamlessly.' },
  { icon: 'analytics', title: 'Real-time Analytics', desc: 'Track hiring pipeline performance and diversity metrics instantly.' },
  { icon: 'diversity_3', title: 'Bias Elimination', desc: 'Anonymized screening ensuring merit-based hiring decisions.' },
  { icon: 'api', title: 'API Integration', desc: 'Seamlessly sync with your existing ATS and HRIS tools.' },
];

const FeatureModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0B15]/80 backdrop-blur-sm z-50 transition-all"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#15171c] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col">

              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-white/5 flex justify-between items-center bg-[#1a1d23]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Platform Capabilities</h3>
                  <p className="text-gray-400 text-sm">Everything you need to hire the top 1%.</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuresList.map((feature, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      key={idx}
                      className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-lg bg-[#0B0B15] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2 text-lg">{feature.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Ready to transform your hiring?</h4>
                    <p className="text-gray-300 text-sm">Start your free trial today. No credit card required.</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
                    Get Started Now
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#0B0B15]">

      <FeatureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Background Decor - Mouse Interactive Glow (Simplified) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 border-b border-white/5 pb-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 font-sans tracking-tight">
              ML-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Our platform uses advanced machine learning to ensure every match is authentic, verified, and unbiased.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white hover:text-primary font-bold flex items-center gap-2 transition-colors text-base group px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 shrink-0"
          >
            View all features
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* Bento Grid Layout - Neat & Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px] perspective-1000">

          {/* Card 1: Skill Verification (Tall Card) */}
          <TiltCard
            index={1}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
            className="md:col-span-2 md:row-span-2 bg-[#15171c]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(31,107,122,0.1)]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
              <div>
                <div className="size-14 rounded-2xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">verified_user</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Skill Verification Engine</h3>
                <p className="text-gray-400 text-base sm:text-lg max-w-md">Real-time code assessments and portfolio analysis to validate claims with 99.9% accuracy.</p>
              </div>

              {/* Visual Element: User Verification Bar */}
              <div className="w-full mt-8 bg-[#0B0B15] rounded-xl border border-white/5 p-4 flex items-center gap-4 shadow-xl">
                <div className="size-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-gray-300">person</span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 w-1/3 bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="h-2.5 w-3/4 bg-gray-800 rounded-full"></div>
                </div>
                <div className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-lg font-mono flex items-center gap-2 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  VERIFIED
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Fraud Detection */}
          <TiltCard
            index={2}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
            className="md:col-span-1 md:row-span-1 bg-[#15171c]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden group hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>

            <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-red-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]">lock</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fraud Detection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Advanced pattern recognition blocks resume fraud instantly.</p>
            </div>
          </TiltCard>

          {/* Card 3: ML Matching */}
          <TiltCard
            index={3}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
            className="md:col-span-1 md:row-span-1 bg-[#15171c]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>

            <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-blue-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">hub</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ML Matching</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Smart algorithms that match potential with opportunity.</p>
            </div>
          </TiltCard>

          {/* Card 4: Instant Hiring Flows */}
          <TiltCard
            index={4}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
            className="md:col-span-3 md:row-span-1 bg-[#15171c]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
          >

            <div className="relative z-10 flex-1" style={{ transform: "translateZ(20px)" }}>
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-yellow-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">bolt</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Instant Hiring Flows</h3>
              <p className="text-gray-400 max-w-sm">Reduce time-to-hire by 60% with automated screening and scheduling.</p>
            </div>

            {/* Visual: Bar Chart */}
            <div className="relative z-10 w-full max-w-md bg-[#0B0B15] rounded-xl border border-white/5 p-6 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-wider">EFFICIENCY GAIN</span>
                <span className="text-sm font-bold text-green-400">+14h Saved</span>
              </div>
              <div className="flex items-end gap-2 h-20">
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[30%] hover:bg-gray-700 transition-colors relative group/bar">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">Day 1</div>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[45%] hover:bg-gray-700 transition-colors"></div>
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[40%] hover:bg-gray-700 transition-colors"></div>
                <div className="flex-1 bg-primary/30 rounded-t-sm h-[70%] hover:bg-primary/50 transition-colors"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(31,107,122,0.5)] hover:h-[95%] transition-all"></div>
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default Features;
