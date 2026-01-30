import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public pages
import Landing from './components/landing/Landing';
import AuthPage from './components/Authentication/AuthPage';

// Dashboards (standalone full-screen pages)
import CandidateDashboard from './components/dashboards/CandidateDashboard';
import RecruiterDashboard from './components/dashboards/recruiter/RecruiterDashboard';
import PostJob from './components/dashboards/recruiter/PostJob';

function App() {
  return (
    <div className="antialiased bg-background-dark text-white min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Candidate Routes */}
        <Route path="/dashboard/candidate" element={<CandidateDashboard />} />

        {/* Recruiter Routes */}
        <Route path="/dashboard/recruiter">
          <Route index element={<RecruiterDashboard />} />
          <Route path="post-job" element={<PostJob />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;