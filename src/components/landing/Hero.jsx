import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[1, -0.5, -2]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <MeshDistortMaterial color="#1f6b7a" speed={2} distort={0.4} radius={1} transparent opacity={0.6} wireframe />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, 1, -3]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* --- Advanced Background Visualization --- */}
      <div className="absolute inset-0 bg-[#0B0B15] z-0">
        <div className="absolute inset-0 opacity-80">
          <AnimatedBackground />
        </div>

        {/* Main Gradient Mesh (Subtle Overlay) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1f6b7a]/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Badge - Neater Look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white font-sans text-center"
        >
          Hire by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f6b7a] via-cyan-400 to-blue-500 animate-gradient-x">Skills</span>, <br />
          <span className="relative">
            Not Resumes
            {/* Underline Decoration */}
            <svg className="absolute -bottom-2 w-full h-3 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline - Better Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed px-4"
        >
          Replace guesswork with <span className="text-white font-bold">verified data</span>. Our ML engine validates candidate skills in real-time, ensuring you never miss top talent.
        </motion.p>

        {/* Buttons - Modern Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center pt-6"
        >
          <Link to="/auth">
            <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(31,107,122,0.6)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>Start Hiring Now</span>
              </div>
            </button>
          </Link>
          <Link to="/auth" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">search</span>
              <span>Find a Job</span>
            </button>
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