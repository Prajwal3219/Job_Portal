import React from 'react';

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
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#1a1d23] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-16">
          How it works
        </h2>
        
        <div className="relative">
          {/* Vertical Line - Left on mobile, Center on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-ml-[1px]"></div>

          <div className="flex flex-col gap-12 sm:gap-20">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(31,107,122,0.8)] z-20"></div>

                {/* Text Section */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 !== 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{step.desc}</p>
                </div>

                {/* Image Section */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="w-full aspect-video rounded-lg bg-surface-dark border border-white/5 overflow-hidden relative shadow-2xl group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                    {/* Fallback gradient if image fails */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;