import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden min-h-screen flex flex-col justify-center bg-[#0B0B15]">

      {/* --- Spotlight Effect --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#1f6b7a_100%)] opacity-30 blur-[100px] animate-spotlight"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)] opacity-20 blur-[80px] animate-spotlight delay-75"></div>
      </div>

      {/* Grid Pattern with Mouse Interaction (Simulated via overlay for now) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Badge - Neater Look */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:border-primary/50 transition-colors group cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold text-gray-300 tracking-widest uppercase group-hover:text-primary transition-colors">
            AI-Powered Recruitment
          </span>
        </motion.div>

        {/* Headline - Mixed Shades & Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white font-sans text-center relative z-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block"
          >
            Hire by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f6b7a] via-cyan-400 to-blue-500 animate-gradient-x">Skills</span>,
          </motion.span>
          <span className="block relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Not Resumes
            </motion.span>
            {/* Underline Decoration */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-2 w-full h-3 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </motion.svg>
          </span>
        </h1>

        {/* Subheadline - Better Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed px-4 relative z-20"
        >
          Replace guesswork with <span className="text-white font-bold">verified data</span>. Our ML engine validates candidate skills in real-time, ensuring you never miss top talent.
        </motion.p>

        {/* Buttons - Modern Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center pt-6 relative z-20"
        >
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(31,107,122,0.4)] hover:shadow-[0_0_40px_rgba(31,107,122,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>Start Hiring Now</span>
              </div>
            </motion.button>
          </Link>
          <Link to="/auth" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">search</span>
              <span>Find a Job</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Steve Jobs Quote - Elegant & Minimal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="relative z-10 mt-24 max-w-4xl mx-auto text-center"
      >
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors duration-500">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors"></div>

          <span className="material-symbols-outlined text-6xl text-white/20 mb-6 block">format_quote</span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/90 leading-relaxed mb-6">
            "The only way to do great work is to love what you do."
          </h3>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">Steve Jobs</p>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;