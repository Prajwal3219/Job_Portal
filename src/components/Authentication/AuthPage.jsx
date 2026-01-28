import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const AuthPage = () => {
    const location = useLocation();

    // Initialize state based on the navigation state passed from the Link
    // If state.view is 'signup', default to false (Sign Up mode). Otherwise true (Login mode).
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (location.state?.view === 'signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.state]);

    const [userType, setUserType] = useState('talent');

    return (
        <div className="min-h-screen w-full bg-[#1a1d23] relative flex items-center justify-center p-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 top-0 w-full h-full bg-hero-glow pointer-events-none z-0"></div>
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Auth Card */}
            <div className="relative z-10 w-full max-w-md bg-[#2a2e37]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in">

                {/* Header & Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                        <div className="size-8 text-primary flex items-center justify-center bg-primary/20 rounded-lg">
                            <span className="material-symbols-outlined text-[20px]">psychology</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight">SkillHire</h2>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-gray-400 text-sm">
                        {isLogin ? 'Enter your credentials to access your account.' : 'Join the future of skills-based hiring.'}
                    </p>
                </div>

                {/* User Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-lg mb-6 border border-white/5">
                    <button
                        onClick={() => setUserType('talent')}
                        className={`text-sm font-bold py-2 rounded-md transition-all ${userType === 'talent'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Candidate
                    </button>
                    <button
                        onClick={() => setUserType('recruiter')}
                        className={`text-sm font-bold py-2 rounded-md transition-all ${userType === 'recruiter'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Recruiter
                    </button>
                </div>

                {/* Form Fields */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500 text-lg">person</span>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#1a1d23] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email Address</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500 text-lg">mail</span>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full bg-[#1a1d23] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500 text-lg">lock</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-[#1a1d23] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                        </div>
                    </div>

                    {isLogin && (
                        <div className="flex justify-end">
                            <a href="#" className="text-xs text-primary hover:text-primary-glow font-semibold">Forgot Password?</a>
                        </div>
                    )}

                    <button className="w-full bg-primary hover:bg-primary-glow text-white font-bold py-3 rounded-lg shadow-[0_0_20px_rgba(31,107,122,0.3)] hover:shadow-[0_0_30px_rgba(31,107,122,0.5)] transition-all mt-6">
                        {isLogin ? 'Log In' : 'Create Account'}
                    </button>
                </form>

                {/* Divider & Social */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#262931] px-2 text-gray-500">Or continue with</span></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 transition-all text-white text-sm font-medium">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 transition-all text-white text-sm font-medium">
                        <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" className="w-5 h-5 invert" alt="GitHub" />
                        GitHub
                    </button>
                </div>

                {/* Switch Toggle */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-primary hover:text-white font-bold transition-colors ml-1"
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;