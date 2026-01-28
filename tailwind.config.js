/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '475px', // For mobile responsiveness
      },
      colors: {
        // --- Core Brand Colors ---
        "primary": "#00e6bf", // Candidate Teal (Main App Primary)
        "primary-dim": "rgba(0, 230, 191, 0.1)",
        "primary-glow": "#2a8a9c", // Landing page glow var
        
        // --- Recruiter Specific ---
        "recruiter-primary": "#33ddff", // Neon Cyan
        "recruiter-primary-dim": "rgba(51, 221, 255, 0.1)",

        // --- Backgrounds & Surfaces ---
        "background-light": "#f9fafa",
        "background-dark": "#0B0B15", // Deepest Cosmic Dark (Unified Base)
        
        "surface-dark": "#1C1E21", // Recruiter/General Surface
        "surface-darker": "#161B1E", // Slightly darker surface
        
        "navy-sidebar": "#151A25", // Dashboard Sidebar
        "card-dark": "#222528", // Recruiter Cards
        "card-depth": "#1A1F2E", // Candidate Cards (Rich Dark)
        
        "glass-bg": "rgba(26, 31, 46, 0.8)", // Opaque Glass
      },
      fontFamily: {
        // 'Manrope' for Landing, 'Space Grotesk' for Dashboards
        "sans": ["Manrope", "Inter", "sans-serif"], 
        "display": ["Space Grotesk", "Manrope", "sans-serif"],
        "body": ["Inter", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        // Landing Page Gradients
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4) 0%, rgba(31, 107, 122, 0.2) 40%, rgba(33, 36, 44, 0) 70%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        
        // Dashboard Gradients
        'cosmic-mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,20%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,20%,1) 0, transparent 50%)',
      },
      boxShadow: {
        // Recruiter Neon Effects
        "neon": "0 0 10px rgba(51, 221, 255, 0.3), 0 0 20px rgba(51, 221, 255, 0.1)",
        "neon-text": "0 0 5px rgba(51, 221, 255, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(51, 221, 255, 0.05)",
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}