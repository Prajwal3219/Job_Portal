import { motion } from 'framer-motion';
import {
  Award,
  BarChart2,
  BookOpen,
  CheckCircle2,
  Code,
  ExternalLink,
  Folder,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  LogOut,
  Menu,
  Plus,
  Save,
  Settings,
  User,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const StudentProfileBuilder = () => {
  const navigate = useNavigate();
  const theme = {
    bg: "bg-[#15171c]",
    cardBg: "bg-[#1a1d23]",
    accent: "bg-[#1f6b7a]",
    accentHover: "hover:bg-[#185662]",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    border: "border-gray-800",
  };
  const { user } = useAuth();
  const [isOpenToWork, setIsOpenToWork] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Profile State
  const [profileData, setProfileData] = useState({
    profileInfo: {
      bio: '',
      badges: [],
      isOpenToWork: true,
      avatar: '',
      title: ''
    },
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    links: {
      github: '',
      portfolio: '',
      linkedin: ''
    },
    experience: []
  });

  // UI state for adding items
  const [showAddForm, setShowAddForm] = useState({
    education: false,
    skill: false,
    project: false,
    cert: false
  });

  const [newItem, setNewItem] = useState({
    education: { school: '', degree: '', year: '', grade: '' },
    skill: '',
    project: { title: '', desc: '', stack: [], githubLink: '', liveLink: '' },
    cert: { title: '', issuer: '', date: '' }
  });

  const handleAddItem = (type) => {
    if (type === 'education') {
      updateNestedState('education', null, [...profileData.education, newItem.education]);
      setNewItem(prev => ({ ...prev, education: { school: '', degree: '', year: '', grade: '' } }));
    } else if (type === 'skills') {
      if (newItem.skill.trim()) {
        updateNestedState('skills', null, [...profileData.skills, newItem.skill.trim()]);
        setNewItem(prev => ({ ...prev, skill: '' }));
      }
    } else if (type === 'projects') {
      updateNestedState('projects', null, [...profileData.projects, newItem.project]);
      setNewItem(prev => ({ ...prev, project: { title: '', desc: '', stack: [], githubLink: '', liveLink: '' } }));
    }
    setShowAddForm(prev => ({ ...prev, [type]: false }));
  };

  const handleRemoveItem = (type, index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    updateNestedState(type, null, list);
  };

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/candidate/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setProfileData(prev => ({
            ...prev,
            ...data,
            profileInfo: data.profileInfo || prev.profileInfo,
            education: data.education || prev.education,
            skills: data.skills || prev.skills,
            certifications: data.certifications || prev.certifications,
            projects: data.projects || prev.projects,
            links: data.links || prev.links,
            experience: data.experience || prev.experience
          }));
          setIsOpenToWork(data.profileInfo?.isOpenToWork ?? true);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/candidate/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          ...profileData,
          profileInfo: {
            ...profileData.profileInfo,
            isOpenToWork
          }
        })
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error: ' + (data.message || 'Failed to update profile'));
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to update nested state
  const updateNestedState = (section, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [section]: field ? { ...prev[section], [field]: value } : value
    }));
  };

  // --- SCROLL FUNCTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header on mobile if needed, or just smooth scroll
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  // --- LOGO COMPONENT (Strictly using your provided code structure) ---
  const BrandLogo = () => (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-full border border-[#1f6b7a]/30">
        {/* Using the P as placeholder exactly as you requested */}
        <span className="material-symbols-outlined text-[20px] font-bold">psychology</span>
      </div>
      <h2 className="text-white text-xl font-bold tracking-tight">SkillHire</h2>
    </div>
  );

  // --- SECTION TITLE HELPER ---
  const SectionTitle = ({ title, subtitle, action, onAction }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-1 h-5 bg-[#1f6b7a] rounded-full"></div>
          {title}
        </h3>
        {subtitle && <p className="text-sm text-gray-500 ml-3">{subtitle}</p>}
      </div>
      {action && (
        <button
          onClick={onAction}
          className="text-xs font-bold text-[#1f6b7a] border border-[#1f6b7a]/30 px-4 py-2 rounded-lg hover:bg-[#1f6b7a]/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
        >
          {action}
        </button>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textPrimary} font-sans flex flex-col lg:block selection:bg-[#1f6b7a] selection:text-white scroll-smooth`}>

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800 bg-[#15171c] sticky top-0 z-30">
        <BrandLogo />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 border-r ${theme.border} bg-[#15171c] flex flex-col p-6
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:fixed
      `}>
        {/* Logo (Desktop) */}
        <div
          className="h-24 flex items-center px-3 border-b border-white/5 bg-[#15171c] cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => navigate('/')}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-full border border-[#1f6b7a]/30">
              <span className="material-symbols-outlined text-[32px]">psychology</span>
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight font-sans">SkillHire</h2>
          </div>
        </div>

        {/* Navigation - Converted to Scroll Buttons */}
        <nav className="space-y-2 flex-1 mt-6 lg:mt-0 overflow-y-auto overflow-x-hidden">
          <NavButton icon={<User size={18} />} label="Profile Info" id="profile" active={activeSection === 'profile'} onClick={scrollToSection} />
          <NavButton icon={<BookOpen size={18} />} label="Education" id="education" active={activeSection === 'education'} onClick={scrollToSection} />
          <NavButton icon={<Code size={18} />} label="Skill Matrix" id="skills" active={activeSection === 'skills'} onClick={scrollToSection} />
          <NavButton icon={<Award size={18} />} label="Certifications" id="certifications" active={activeSection === 'certifications'} onClick={scrollToSection} />
          <NavButton icon={<Folder size={18} />} label="Projects" id="projects" active={activeSection === 'projects'} onClick={scrollToSection} />
          <NavButton icon={<BarChart2 size={18} />} label="Analytics" id="analytics" active={activeSection === 'analytics'} onClick={scrollToSection} />
          <NavButton icon={<Settings size={18} />} label="Settings" id="settings" active={activeSection === 'settings'} onClick={scrollToSection} />
        </nav>

        {/* User Mini Profile */}
        <div className={`mt-auto p-4 rounded-xl ${theme.cardBg} border ${theme.border} flex items-center gap-3`}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1f6b7a] to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg uppercase">
            {user?.name ? user.name.split(' ').map(n => n[0]).join('') : '??'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name || 'Candidate'}</p>
            <p className="text-xs text-teal-400 truncate">Premium Member</p>
          </div>
          <button
            className="text-gray-500 hover:text-white transition-colors"
            onClick={() => navigate('/auth')}
            title="Sign Out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="lg:ml-64 flex-1 p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* CENTER COLUMN (STACKED SECTIONS) */}
        <div className="col-span-1 lg:col-span-8 space-y-12 pb-20">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-6 bg-[#1f6b7a] rounded-full"></div>
                <span className="text-xs font-semibold tracking-wider text-[#1f6b7a] uppercase">Workspace</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Student Profile Builder</h1>
              <p className={`${theme.textSecondary} mt-2 text-sm md:text-base`}>Showcase your technical prowess and projects to top-tier recruiters.</p>
            </div>

            {/* Completion Score */}
            <div className={`w-full md:w-auto px-5 py-3 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between md:justify-start gap-4`}>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Completion Score</p>
                <p className="text-xl font-bold">85%</p>
              </div>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-teal-400 to-[#1f6b7a]"></div>
              </div>
            </div>
          </div>

          {/* SECTION 1: CORE PROFILE (Existing) */}
          <div id="profile" className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border} shadow-lg relative overflow-hidden group`}>
            {/* Ambient Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1f6b7a]/10 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar Upload */}
              <div className="flex flex-col gap-3 mx-auto md:mx-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-600 flex items-center justify-center relative overflow-hidden group-hover:border-[#1f6b7a] transition-colors">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                  <User size={40} className="text-gray-500 group-hover:text-white transition-colors relative z-10" />
                </div>
                <button className="text-xs font-medium bg-black/40 hover:bg-black/60 py-1.5 rounded-lg border border-gray-700 transition-all text-white">
                  CHANGE
                </button>
              </div>

              {/* Info Fields */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div className="text-center md:text-left w-full md:w-auto">
                    <h2 className="text-2xl font-bold mb-2">{user?.name || 'Candidate'}</h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <Badge text="Full Stack Engineer" />
                      <Badge text="UI/UX Designer" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-900/30 border border-teal-800/50 w-full sm:w-auto justify-center">
                    <CheckCircle2 size={14} className="text-teal-400" />
                    <span className="text-xs font-medium text-teal-400">Verified Student</span>
                  </div>

                  {/* Toggle Switch */}
                  <div
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => setIsOpenToWork(!isOpenToWork)}
                  >
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${isOpenToWork ? 'bg-[#1f6b7a]' : 'bg-gray-600'}`}>
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isOpenToWork ? 'left-6' : 'left-1'}`}></div>
                    </div>
                    <span className="text-sm font-medium">OPEN TO WORK</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Professional Biography</label>
                  <textarea
                    className={`w-full h-24 rounded-xl bg-[#15171c] border ${theme.border} p-4 text-sm text-gray-300 focus:outline-none focus:border-[#1f6b7a] transition-colors resize-none`}
                    placeholder="Tell your professional story..."
                    value={profileData.profileInfo.bio}
                    onChange={(e) => updateNestedState('profileInfo', 'bio', e.target.value)}
                  ></textarea>
                  {message && (
                    <div className={`mt-2 p-3 rounded-lg text-xs font-bold ${message.includes('Error') ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}>
                      {message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: EDUCATION */}
          <section id="education" className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <SectionTitle
              title="Education"
              subtitle="Your academic journey"
              action={<><Plus size={14} /> Add Education</>}
              onAction={() => setShowAddForm(prev => ({ ...prev, education: !prev.education }))}
            />

            {showAddForm.education && (
              <div className="mb-6 p-4 rounded-xl bg-[#15171c] border border-[#1f6b7a]/30 space-y-4 animate-in fade-in slide-in-from-top-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="School/University"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.education.school}
                    onChange={(e) => setNewItem(prev => ({ ...prev, education: { ...prev.education, school: e.target.value } }))}
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.education.degree}
                    onChange={(e) => setNewItem(prev => ({ ...prev, education: { ...prev.education, degree: e.target.value } }))}
                  />
                  <input
                    type="text"
                    placeholder="Year (e.g. 2021 - 2025)"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.education.year}
                    onChange={(e) => setNewItem(prev => ({ ...prev, education: { ...prev.education, year: e.target.value } }))}
                  />
                  <input
                    type="text"
                    placeholder="Grade/CGPA"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.education.grade}
                    onChange={(e) => setNewItem(prev => ({ ...prev, education: { ...prev.education, grade: e.target.value } }))}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddItem('education')}
                    className="px-4 py-2 bg-[#1f6b7a] text-white rounded-lg text-xs font-bold hover:bg-[#185662] transition-colors"
                  >
                    Add Entry
                  </button>
                  <button
                    onClick={() => setShowAddForm(prev => ({ ...prev, education: false }))}
                    className="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {profileData.education.length > 0 ? (
                profileData.education.map((edu, index) => (
                  <div key={index} className="relative group">
                    <EducationCard
                      school={edu.school}
                      degree={edu.degree}
                      year={edu.year}
                      grade={edu.grade}
                      logo={edu.logo || (edu.school ? edu.school.substring(0, 2).toUpperCase() : '??')}
                    />
                    <button
                      onClick={() => handleRemoveItem('education', index)}
                      className="absolute top-4 right-4 p-1.5 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">No education history added yet.</p>
              )}
            </div>
          </section>

          {/* SECTION 3: SKILL MATRIX */}
          <div id="skills" className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <SectionTitle
              title="Skill Matrix"
              subtitle="Categorize your primary competencies"
              action={showAddForm.skill ? "CANCEL" : <><Plus size={14} /> Add Skill</>}
              onAction={() => setShowAddForm(prev => ({ ...prev, skill: !prev.skill }))}
            />

            {showAddForm.skill && (
              <div className="mb-6 flex gap-2 animate-in fade-in slide-in-from-top-2">
                <input
                  type="text"
                  placeholder="Enter skill name..."
                  className={`flex-1 bg-[#15171c] border ${theme.border} rounded-xl px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                  value={newItem.skill}
                  onChange={(e) => setNewItem(prev => ({ ...prev, skill: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('skill')}
                  autoFocus
                />
                <button
                  onClick={() => handleAddItem('skill')}
                  className="px-4 py-2 bg-[#1f6b7a] text-white rounded-xl text-xs font-bold hover:bg-[#185662] transition-colors"
                >
                  Add
                </button>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {profileData.skills.length > 0 ? (
                profileData.skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <span className="px-4 py-2 rounded-xl bg-[#15171c] border border-gray-800 text-sm text-gray-300 hover:border-[#1f6b7a] hover:text-[#1f6b7a] cursor-pointer transition-all flex items-center gap-2">
                      {skill}
                    </span>
                    <button
                      onClick={() => handleRemoveItem('skills', index)}
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px]"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">No skills added yet.</p>
              )}
              <span
                onClick={() => setShowAddForm(prev => ({ ...prev, skill: true }))}
                className="px-4 py-2 rounded-xl border border-dashed border-gray-700 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-300 cursor-pointer transition-all flex items-center gap-2"
              >
                <Plus size={14} /> Add More
              </span>
            </div>
          </div>

          {/* SECTION 4: CERTIFICATIONS (New) */}
          <section id="certifications" className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <SectionTitle title="Certifications" subtitle="Validated skills and achievements" action={<><Plus size={14} /> Add Certificate</>} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CertCard title="AWS Certified Cloud Practitioner" issuer="Amazon Web Services" date="Issued Dec 2024" />
              <CertCard title="Meta Front-End Developer" issuer="Coursera" date="Issued Aug 2024" />
            </div>
          </section>

          {/* SECTION 5: PROJECTS */}
          <section id="projects" className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <SectionTitle
              title="Projects"
              subtitle="Showcase your best work"
              action={<><Plus size={14} /> Add Project</>}
              onAction={() => setShowAddForm(prev => ({ ...prev, project: !prev.project }))}
            />

            {showAddForm.project && (
              <div className="mb-6 p-4 rounded-xl bg-[#15171c] border border-[#1f6b7a]/30 space-y-4 animate-in fade-in slide-in-from-top-2">
                <input
                  type="text"
                  placeholder="Project Title"
                  className={`w-full bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                  value={newItem.project.title}
                  onChange={(e) => setNewItem(prev => ({ ...prev, project: { ...prev.project, title: e.target.value } }))}
                />
                <textarea
                  placeholder="Project Description"
                  className={`w-full h-24 bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none resize-none`}
                  value={newItem.project.desc}
                  onChange={(e) => setNewItem(prev => ({ ...prev, project: { ...prev.project, desc: e.target.value } }))}
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="GitHub Repo Link"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.project.githubLink}
                    onChange={(e) => setNewItem(prev => ({ ...prev, project: { ...prev.project, githubLink: e.target.value } }))}
                  />
                  <input
                    type="text"
                    placeholder="Deployment / Live Link"
                    className={`bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                    value={newItem.project.liveLink}
                    onChange={(e) => setNewItem(prev => ({ ...prev, project: { ...prev.project, liveLink: e.target.value } }))}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Tech Stack (comma separated)"
                  className={`w-full bg-[#1a1d23] border ${theme.border} rounded-lg px-4 py-2 text-sm focus:border-[#1f6b7a] outline-none`}
                  onChange={(e) => setNewItem(prev => ({ ...prev, project: { ...prev.project, stack: e.target.value.split(',').map(s => s.trim()).filter(Boolean) } }))}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddItem('projects')}
                    className="px-4 py-2 bg-[#1f6b7a] text-white rounded-lg text-xs font-bold hover:bg-[#185662] transition-colors"
                  >
                    Add Project
                  </button>
                  <button
                    onClick={() => setShowAddForm(prev => ({ ...prev, project: false }))}
                    className="px-4 py-2 border border-gray-700 text-gray-400 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {profileData.projects.length > 0 ? (
                profileData.projects.map((proj, index) => (
                  <div key={index} className="relative group">
                    <ProjectCard
                      title={proj.title}
                      desc={proj.desc}
                      stack={proj.stack || []}
                      github={proj.githubLink}
                      live={proj.liveLink}
                    />
                    <button
                      onClick={() => handleRemoveItem('projects', index)}
                      className="absolute top-4 right-12 p-1.5 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">No projects added yet.</p>
              )}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN (Neural Links & Timeline) */}
        <div className="col-span-1 lg:col-span-4 space-y-6">

          {/* Neural Links */}
          <div className={`p-6 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Neural Links</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <LinkItem
                  icon={<Github size={18} />}
                  title="GitHub"
                  status={profileData.links.github ? "CONNECTED" : "NOT LINKED"}
                  active={!!profileData.links.github}
                />
                <input
                  type="text"
                  placeholder="github.com/username"
                  className={`w-full bg-[#15171c] border ${theme.border} rounded-lg px-3 py-1.5 text-xs text-gray-400 focus:border-[#1f6b7a] outline-none`}
                  value={profileData.links.github}
                  onChange={(e) => updateNestedState('links', 'github', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <LinkItem
                  icon={<Globe size={18} />}
                  title="Portfolio"
                  status={profileData.links.portfolio ? "CONNECTED" : "NOT LINKED"}
                  active={!!profileData.links.portfolio}
                />
                <input
                  type="text"
                  placeholder="portfolio-site.com"
                  className={`w-full bg-[#15171c] border ${theme.border} rounded-lg px-3 py-1.5 text-xs text-gray-400 focus:border-[#1f6b7a] outline-none`}
                  value={profileData.links.portfolio}
                  onChange={(e) => updateNestedState('links', 'portfolio', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <LinkItem
                  icon={<Linkedin size={18} />}
                  title="LinkedIn"
                  status={profileData.links.linkedin ? "CONNECTED" : "NOT LINKED"}
                  active={!!profileData.links.linkedin}
                />
                <input
                  type="text"
                  placeholder="linkedin.com/in/username"
                  className={`w-full bg-[#15171c] border ${theme.border} rounded-lg px-3 py-1.5 text-xs text-gray-400 focus:border-[#1f6b7a] outline-none`}
                  value={profileData.links.linkedin}
                  onChange={(e) => updateNestedState('links', 'linkedin', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Data Stream (Timeline) */}
          <div className={`p-6 rounded-3xl ${theme.cardBg} border ${theme.border} relative`}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Data Stream</h3>

            <div className="relative pl-4 border-l border-gray-800 space-y-8">
              <TimelineItem
                role="Full Stack Intern"
                company="Starlight Systems"
                date="2023 - Pres."
                active
              />
              <TimelineItem
                role="Computer Science"
                company="University of Tech"
                date="2021 - 2025"
                icon={<GraduationCap size={16} />}
              />
            </div>

            {/* Save Button */}
            <div className="mt-8 sticky top-8">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className={`w-full py-2.5 rounded-xl ${theme.accent} ${theme.accentHover} text-white font-bold text-sm shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:opacity-50`}
              >
                <Save size={16} />
                {isLoading ? 'SAVING...' : 'SAVE CONFIG'}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// --- Sub Components ---

const NavButton = ({ icon, label, id, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02, x: 4 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors text-left ${active ? 'bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'}`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </motion.button>
);

const Badge = ({ text }) => (
  <span className="px-2 py-1 rounded bg-[#2a2d36] border border-gray-700 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
    {text}
  </span>
);

const LinkItem = ({ icon, title, status, active }) => (
  <div className={`flex items-center justify-between p-4 rounded-xl border transition-all ${active ? 'bg-[#15171c] border-[#1f6b7a]/50' : 'bg-[#15171c] border-gray-800 hover:border-gray-700'}`}>
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${active ? 'bg-[#1f6b7a] text-white' : 'bg-gray-800 text-gray-400'}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className={`text-[10px] font-bold uppercase tracking-wide ${active ? 'text-[#1f6b7a]' : 'text-gray-600'}`}>
          {status}
        </p>
      </div>
    </div>
    {!active && <Plus size={16} className="text-gray-600" />}
    {active && <CheckCircle2 size={16} className="text-[#1f6b7a]" />}
  </div>
);

const TimelineItem = ({ role, company, date, active }) => (
  <div className="relative group">
    {/* Timeline Dot */}
    <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 ${active ? 'bg-[#1f6b7a] border-[#1f6b7a] shadow-[0_0_10px_rgba(31,107,122,0.5)]' : 'bg-[#15171c] border-gray-600'}`}></div>

    <div className="mb-1 flex justify-between items-start">
      <h4 className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-300'}`}>{role}</h4>
      <span className="text-[10px] font-mono text-gray-500">{date}</span>
    </div>
    <p className="text-xs text-[#1f6b7a] font-medium mb-2">{company}</p>
    {active && (
      <p className="text-xs text-gray-500 leading-relaxed">
        Developing core components for a high-traffic e-commerce platform.
      </p>
    )}
  </div>
);

// New Cards for new sections
const EducationCard = ({ school, degree, year, grade, logo }) => (
  <div className="flex gap-4 p-4 rounded-xl bg-[#15171c] border border-gray-800 hover:border-gray-700 transition-colors">
    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center font-bold text-gray-500 border border-gray-700 shrink-0">
      {logo}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-white text-sm md:text-base">{school}</h4>
        <span className="text-xs text-gray-500 font-mono whitespace-nowrap ml-2">{year}</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#1f6b7a] font-bold">cgp :</span> {grade || 'N/A'}
        <span className="text-[#1f6b7a] font-bold ml-3">degree :</span> {degree}
      </p>
    </div>
  </div>
);

const CertCard = ({ title, issuer, date }) => (
  <div className="p-4 rounded-xl bg-[#15171c] border border-gray-800 hover:border-[#1f6b7a]/50 transition-colors cursor-pointer group">
    <div className="flex justify-between items-start mb-2">
      <div className="p-2 rounded-lg bg-gray-800 text-[#1f6b7a] group-hover:bg-[#1f6b7a] group-hover:text-white transition-colors">
        <Award size={18} />
      </div>
      <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
    </div>
    <h4 className="font-bold text-sm text-gray-200 group-hover:text-white">{title}</h4>
    <p className="text-xs text-gray-500 mt-1">{issuer}</p>
    <p className="text-[10px] text-gray-600 mt-2 font-mono uppercase">{date}</p>
  </div>
);

const ProjectCard = ({ title, desc, stack, github, live }) => (
  <div className="p-4 rounded-xl bg-[#15171c] border border-gray-800 hover:border-[#1f6b7a]/50 transition-colors">
    <div className="flex justify-between items-start">
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <div className="flex gap-2 text-gray-500">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={16} />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
    <p className="text-sm text-gray-400 mb-3 leading-relaxed">{desc}</p>
    <div className="flex gap-2 flex-wrap">
      {stack.map(tech => (
        <span key={tech} className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default StudentProfileBuilder;