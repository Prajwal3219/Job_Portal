import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: 'Create Profile & Connect',
    desc: 'Upload your resume or connect your GitHub/Portfolio. Our system instantly parses your history.',
    image: "/create-profile.png",
  },
  {
    title: 'AI Skill Analysis',
    desc: 'Our engine runs 50+ data point checks to verify your skills against industry standards.',
    image: "/ai-analysis.png",
  },
  {
    title: 'Secure Match',
    desc: 'Get matched with companies looking exactly for your verified skill set. No bias, just data.',
    image: "/secure-match.png",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-gray-400 font-medium">Simple, transparent, and built for speed.</p>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on mobile, Center on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -ml-[1px]"></div>
          <motion.div
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, #1f6b7a 0%, #3b82f6 50%, #a855f7 100%)",
            }}
            className="hidden md:block absolute left-1/2 top-0 w-0.5 -ml-[1px] shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          >
            {/* The Glowing Head of the Beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-t from-white to-transparent blur-sm"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]"></div>
          </motion.div>

          <div className="flex flex-col gap-10 sm:gap-28">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Connector Line Logic (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-[#15171c] border-2 border-primary shadow-[0_0_10px_rgba(31,107,122,1)] relative z-10"
                  />
                  <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse-slow"></div>
                </div>

                {/* Text Section Animation */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-1/2 text-center md:text-left ${idx % 2 !== 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}
                >
                  <div className="inline-block p-2 rounded-lg bg-surface-dark border border-white/5 mb-4 shadow-sm">
                    <span className="text-xs font-bold text-primary font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{step.desc}</p>
                </motion.div>

                {/* Image Section Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className={`w-full md:w-1/2 ${idx % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}
                >
                  <div className="w-full aspect-video rounded-xl bg-[#15171c]/50 backdrop-blur-sm border border-white/10 overflow-hidden relative shadow-2xl group hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {/* Gradient Overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171c] via-transparent to-transparent opacity-60"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;