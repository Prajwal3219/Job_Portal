import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();

  // State for Skills Input
  const [skills, setSkills] = useState(['Figma', 'Prototyping']);
  const [currentSkill, setCurrentSkill] = useState('');

  // State for Toggles
  const [isFresher, setIsFresher] = useState(false);
  const [isNegotiable, setIsNegotiable] = useState(false);

  // Handle adding skills
  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      e.preventDefault();
      if (!skills.includes(currentSkill.trim())) {
        setSkills([...skills, currentSkill.trim()]);
      }
      setCurrentSkill('');
    }
  };

  // Handle removing skills
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary selection:text-white pb-8 sm:pb-12">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-hero-glow pointer-events-none z-0"></div>
      <div className="absolute top-20 right-[-50px] sm:right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-50px] sm:left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* --- Header --- */}
      <header className="sticky top-0 z-30 bg-[#1a1d23]/95 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#1a1d23] border border-white/10 hover:border-primary/50 text-gray-400 hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_back</span>
          </button>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight font-sans">Post a New Job</h1>
        </div>
        <button className="text-xs sm:text-sm font-bold text-gray-400 hover:text-primary transition-colors font-sans">
          Save Draft
        </button>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 animate-fade-in">

        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 font-sans">Job Details</h2>
            <p className="text-gray-400 text-sm sm:text-base font-sans">Create a streamlined listing to attract the best talent.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 bg-[#1a1d23] px-4 py-2 rounded-lg border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live Draft
          </div>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column: Main Info (2 Cols wide) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Basic Info Card */}
            <div className="bg-[#1a1d23] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">article</span>
                Basic Information
              </h3>

              <div className="space-y-4">
                {/* Job Title */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Product Designer"
                    className="w-full bg-[#15171c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Job Type */}
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Job Type</label>
                    <div className="relative">
                      <select className="w-full bg-[#15171c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  {/* Work Mode */}
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Work Mode</label>
                    <div className="relative">
                      <select className="w-full bg-[#15171c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                        <option>Remote</option>
                        <option>On-Site</option>
                        <option>Hybrid</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Requirements */}
            <div className="bg-[#1a1d23] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                Description & Requirements
              </h3>

              {/* Skills */}
              <div className="mb-6">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Required Skills</label>
                <div className="w-full bg-[#15171c] border border-white/10 rounded-xl px-3 py-2 flex flex-wrap gap-2 focus-within:border-primary transition-all min-h-[50px]">
                  {skills.map((skill) => (
                    <div key={skill} className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="hover:text-white transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyDown={handleSkillKeyDown}
                    placeholder={skills.length === 0 ? "Type skill & hit enter..." : ""}
                    className="bg-transparent border-none text-sm text-white focus:ring-0 placeholder-gray-500 flex-1 min-w-[120px] py-1.5 px-2"
                  />
                </div>
              </div>

              {/* Rich Text Editor */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Job Description</label>
                <div className="w-full bg-[#15171c] border border-white/10 rounded-xl overflow-hidden">
                  <div className="bg-[#1a1d23] border-b border-white/5 px-2 py-2 flex gap-1">
                    {['format_bold', 'format_italic', 'format_list_bulleted', 'link'].map((icon) => (
                      <button key={icon} className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <textarea rows="6" className="w-full bg-transparent border-none p-4 text-sm text-white placeholder-gray-500 focus:ring-0 resize-none" placeholder="Describe key responsibilities..."></textarea>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Logistics (1 Col wide) */}
          <div className="space-y-6">

            {/* Logistics Card */}
            <div className="bg-[#1a1d23] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Logistics
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">location_on</span>
                    <input type="text" placeholder="City, Country" className="w-full bg-[#15171c] border border-white/10 rounded-xl pl-9 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Experience</label>
                  <div className="relative">
                    <select className="w-full bg-[#15171c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
                      <option>0-1 Years</option>
                      <option>1-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setIsFresher(!isFresher)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 ${isFresher ? 'bg-primary' : 'bg-gray-700'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isFresher ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </button>
                    <span className="text-xs text-gray-400">Fresher Friendly</span>
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block font-sans">Apply By</label>
                  <input type="date" className="w-full bg-[#15171c] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-primary" />
                </div>
              </div>
            </div>

            {/* Salary Card */}
            <div className="bg-[#1a1d23] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                Compensation
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Min</label>
                    <input type="number" placeholder="50k" className="w-full bg-[#15171c] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Max</label>
                    <input type="number" placeholder="80k" className="w-full bg-[#15171c] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <select className="bg-[#15171c] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary flex-1">
                    <option>USD</option>
                    <option>INR</option>
                    <option>EUR</option>
                  </select>
                  <select className="bg-[#15171c] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary flex-1">
                    <option>/ Year</option>
                    <option>/ Month</option>
                    <option>/ Hour</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsNegotiable(!isNegotiable)}>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isNegotiable ? 'bg-primary border-primary' : 'border-gray-500'}`}>
                    {isNegotiable && <span className="material-symbols-outlined text-[10px] text-white">check</span>}
                  </div>
                  <span className="text-xs text-gray-400">Negotiable</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="w-full bg-primary hover:bg-primary-glow text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,230,191,0.4)] hover:shadow-[0_0_30px_rgba(0,230,191,0.6)] transition-all flex items-center justify-center gap-2">
              Post Job Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PostJob;