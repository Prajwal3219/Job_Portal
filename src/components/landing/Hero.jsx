import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 top-0 w-full h-full bg-hero-glow pointer-events-none z-0"></div>
      <div className="absolute top-20 right-[-50px] sm:right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-50px] sm:left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] xs:text-xs font-medium text-gray-300 uppercase tracking-wider">
            Now with AI Fraud Detection
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-sm px-2">
          Get Hired By Skills, <br className="hidden sm:block" />
          <span className="text-primary text-glow block sm:inline mt-2 sm:mt-0">Not Just Resumes</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base xs:text-lg text-gray-400 max-w-2xl font-light leading-relaxed px-4">
          Leverage our ML-powered engine to verify skills and detect fraud instantly. Experience the future of recruitment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col xs:flex-row gap-4 w-full justify-center px-4 pt-4">
          <Link to="/auth" className="w-full xs:w-auto">
            <button
              className="bg-primary hover:bg-primary-glow text-white font-bold px-8 h-12 rounded-lg text-base w-full xs:w-auto flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(31,107,122,0.4)] hover:shadow-[0_0_30px_rgba(31,107,122,0.6)] transition-all border border-white/10"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              Start Hiring
            </button>
          </Link>
          <Link to="/auth" className="w-full xs:w-auto">
            <button
              className="glass-button text-white px-8 h-12 rounded-lg text-base font-bold w-full xs:w-auto flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              Find a Job
            </button>
          </Link>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative z-10 mt-12 xs:mt-16 max-w-5xl mx-auto rounded-xl border border-white/10 glass-panel p-2 shadow-2xl bg-[#2a2e37]/40 backdrop-blur-xl">
        <div className="aspect-[16/9] w-full bg-[#15171c] rounded-lg overflow-hidden relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
            style={{
              backgroundImage:
                "url('https://placehold.co/1200x800/15171c/3b82f6?text=Live+Data+Visualization')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#15171c] via-transparent to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between items-end">
            <div>
              <div className="text-[10px] sm:text-xs text-primary font-mono mb-1">LIVE ANALYSIS</div>
              <div className="text-lg sm:text-2xl font-bold text-white">98.4% Match Accuracy</div>
            </div>
            <div className="flex gap-2">
              <div className="size-8 sm:size-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-xs sm:text-sm">analytics</span>
              </div>
              <div className="size-8 sm:size-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-xs sm:text-sm">security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;