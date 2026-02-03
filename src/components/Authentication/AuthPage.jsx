import { BarChart2, Check, Eye, EyeOff, ShieldAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AnimatedButton from '../common/AnimatedButton';

const AuthPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useAuth();

    // State
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('talent'); // 'talent' or 'recruiter'
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    useEffect(() => {
        if (location.state?.view === 'signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.state]);

    const handleAuth = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const userData = {
            name: isLogin ? undefined : name,
            email,
            password,
            role: userType
        };

        try {
            const apiPrefix = userType === 'recruiter' ? '/api/recruiter' : '/api/candidate';
            const url = isLogin ? `http://localhost:5000${apiPrefix}/login` : `http://localhost:5000${apiPrefix}/register`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            // Check if response is JSON
            const contentType = response.headers.get("content-type");
            let data;
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Server returned non-JSON response: ${response.status} ${response.statusText}`);
            }

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            // Save user data to context
            login(data);

            // For now, just navigate. In a real app, we'd save the token in state/localStorage
            if (userType === 'talent') {
                navigate('/dashboard/candidate');
            } else {
                navigate('/dashboard/recruiter');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0B0B15] text-white font-sans flex flex-col relative overflow-hidden selection:bg-[#33ddff] selection:text-[#0B0B15]">

            {/* Navbar (Logo & Sign In/Up Link) */}
            <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-[#151A25] border border-[#33ddff]/20 flex items-center justify-center text-[#33ddff]">
                        <ShieldAlert size={18} />
                    </div>
                    <span className="text-lg font-bold tracking-tight">SkillHire</span>
                </Link>
                <div className="text-xs font-medium text-gray-400">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-2 text-white hover:text-[#33ddff] transition-colors font-bold"
                    >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </div>
            </header>

            <main className="flex-1 flex w-full relative z-10">

                {/* LEFT COLUMN: FORM */}
                <div className="w-full lg:w-[40%] flex items-center justify-center p-6 sm:p-8 relative bg-[#0B0B15]">

                    <div className="w-full max-w-sm space-y-6 relative z-10">

                        <div className="space-y-1">
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h1>
                            <p className="text-gray-400 text-sm">
                                {isLogin ? 'Access your workspace.' : 'Join the recruitment revolution.'}
                            </p>
                        </div>

                        {/* User Type Toggle */}
                        <div className="flex p-1 bg-[#151A25] rounded-lg border border-white/5">
                            <button
                                onClick={() => setUserType('talent')}
                                className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${userType === 'talent'
                                    ? 'bg-[#1f6b7a] text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                I am a Candidate
                            </button>
                            <button
                                onClick={() => setUserType('recruiter')}
                                className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${userType === 'recruiter'
                                    ? 'bg-[#1f6b7a] text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                I am a Recruiter
                            </button>
                        </div>

                        <form className="space-y-4" onSubmit={handleAuth}>
                            {!isLogin && (
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={onChange}
                                        placeholder="John Doe"
                                        className="w-full bg-[#151A25] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#33ddff] focus:ring-1 focus:ring-[#33ddff] transition-all"
                                        required={!isLogin}
                                    />
                                </div>
                            )}

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="name@company.com"
                                    className="w-full bg-[#151A25] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#33ddff] focus:ring-1 focus:ring-[#33ddff] transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{isLogin ? 'Password' : 'Create Password'}</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={onChange}
                                        placeholder="••••••••"
                                        className="w-full bg-[#151A25] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#33ddff] focus:ring-1 focus:ring-[#33ddff] transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {!isLogin && (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded border border-gray-600 bg-[#151A25] flex items-center justify-center cursor-pointer hover:border-[#33ddff] transition-colors">
                                    </div>
                                    <p className="text-[10px] text-gray-400">
                                        I agree to the <span className="text-white hover:underline cursor-pointer">Terms</span> and <span className="text-white hover:underline cursor-pointer">Privacy Policy</span>.
                                    </p>
                                </div>
                            )}

                            {error && (
                                <p className="text-red-500 text-xs text-center">{error}</p>
                            )}

                            <AnimatedButton
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#1f6b7a] hover:bg-[#185662] text-white font-bold py-3 rounded-lg shadow-[0_4px_20px_rgba(31,107,122,0.3)] text-sm disabled:opacity-50"
                            >
                                {isLoading ? 'Processing...' : (isLogin ? 'Log In' : 'Get Started')}
                                {!isLogin && !isLoading && <span className="ml-1">→</span>}
                            </AnimatedButton>
                        </form>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                            <div className="relative flex justify-center text-[9px] uppercase font-bold tracking-widest text-gray-600 bg-[#0B0B15] px-3">Or continue with</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
                                className="flex items-center justify-center gap-2 bg-[#151A25] hover:bg-[#1c212c] border border-white/5 rounded-lg py-2.5 text-xs font-bold transition-all"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                                Google
                            </button>
                            <button
                                onClick={() => window.location.href = 'http://localhost:5000/api/auth/github'}
                                className="flex items-center justify-center gap-2 bg-[#151A25] hover:bg-[#1c212c] border border-white/5 rounded-lg py-2.5 text-xs font-bold transition-all"
                            >
                                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" className="w-4 h-4 invert opacity-70" alt="GitHub" />
                                GitHub
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-700">
                        &copy; 2024 SkillHire Inc.
                    </div>
                </div>

                {/* RIGHT COLUMN: VISUAL */}
                <div className="hidden lg:flex flex-1 bg-[#0B0B15] relative items-center justify-center overflow-hidden border-l border-white/5">
                    {/* Background Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33ddff]/5 rounded-full blur-[80px] pointer-events-none"></div>

                    {/* Concentric Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full opacity-30"></div>

                    {/* Central Globe Icon */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#33ddff]/10 flex items-center justify-center border border-[#33ddff]/20 shadow-[0_0_50px_rgba(51,221,255,0.2)] animate-pulse">
                        <span className="material-symbols-outlined text-[48px] text-[#33ddff]">public</span>
                        <div className="absolute inset-0 bg-[radial-gradient(#33ddff_1px,transparent_1px)] [background-size:12px_12px] opacity-20 rounded-full"></div>
                    </div>

                    {/* Status Card */}
                    <div className="absolute top-[35%] left-16 bg-[#151A25]/90 backdrop-blur-md border border-white/5 rounded-lg p-3 flex items-center gap-3 shadow-xl animate-bounce-slow">
                        <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Status</p>
                            <p className="text-xs font-bold text-white">Skill Verified</p>
                        </div>
                    </div>

                    {/* Accuracy Card */}
                    <div className="absolute bottom-[35%] right-16 bg-[#151A25]/90 backdrop-blur-md border border-white/5 rounded-lg p-3 flex items-center gap-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                        <div className="w-8 h-8 rounded bg-[#33ddff]/10 flex items-center justify-center text-[#33ddff]">
                            <BarChart2 size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Accuracy</p>
                            <p className="text-xs font-bold text-white">99.8% Match</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="absolute bottom-16 text-center space-y-2 max-w-sm px-6">
                        <h2 className="text-xl font-bold text-white">Precision Hiring</h2>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Millions of data points matched with your verified skillset.
                        </p>
                    </div>

                </div>

            </main>
        </div>
    );
};

export default AuthPage;