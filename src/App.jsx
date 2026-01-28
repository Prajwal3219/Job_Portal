import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import AuthPage from './components/Authentication/AuthPage';
import DashboardLayout from './components/DashboardLayout';
import CandidateDashboard from './components/dashboards/CandidateDashboard';
import RecruiterDashboard from './components/dashboards/RecruiterDashboard';

function App() {
  return (
    <div className="antialiased bg-background-dark text-white min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Candidate Routes */}
        <Route path="/dashboard/candidate/*" element={<DashboardLayout userType="talent" />}>
          <Route index element={<CandidateDashboard />} />
          {/* Add more candidate routes here later, e.g., <Route path="jobs" ... /> */}
        </Route>

        {/* Recruiter Routes */}
        <Route path="/dashboard/recruiter/*" element={<DashboardLayout userType="recruiter" />}>
          <Route index element={<RecruiterDashboard />} />
          {/* Add more recruiter routes here later */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;