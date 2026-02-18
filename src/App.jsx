import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTitle from './components/common/PageTitle';
import PageTransition from './components/common/PageTransition';

// Public pages
import AuthPage from './components/Authentication/AuthPage';
import Landing from './components/landing/Landing';

// Dashboards (standalone full-screen pages)
import AdminDashboard from './components/dashboards/admin/AdminDashboard';
import AdminModeration from './components/dashboards/admin/AdminModeration';
import AdminOverview from './components/dashboards/admin/AdminOverview';
import AdminReports from './components/dashboards/admin/AdminReports';
import AdminSettings from './components/dashboards/admin/AdminSettings';
import AdminSupport from './components/dashboards/admin/AdminSupport';
import UsersPage from './components/dashboards/admin/UsersPage';
import CandidateApplications from './components/dashboards/candidate/CandidateApplications'; // New Page
import CandidateDashboard from './components/dashboards/candidate/CandidateDashboard';
import CandidateFreshers from './components/dashboards/candidate/CandidateFreshers'; // New Page
import CandidateJobSearch from './components/dashboards/candidate/CandidateJobSearch'; // New Page
import CandidateLayout from './components/dashboards/candidate/CandidateLayout'; // New Layout
import CandidateMessages from './components/dashboards/candidate/CandidateMessages'; // New Page
import CandidateProfileBuilder from './components/dashboards/candidate/CandidateProfileBuilder';
import CandidateSettings from './components/dashboards/candidate/CandidateSettings';
import CompanyProfile from './components/dashboards/recruiter/CompanyProfile'; // New Page
import PostJob from './components/dashboards/recruiter/PostJob';
import RecruiterApplications from './components/dashboards/recruiter/RecruiterApplications'; // New Page
import RecruiterDashboard from './components/dashboards/recruiter/RecruiterDashboard';
import RecruiterInterviews from './components/dashboards/recruiter/RecruiterInterviews'; // New Page
import RecruiterJobs from './components/dashboards/recruiter/RecruiterJobs'; // New Page
import RecruiterLayout from './components/dashboards/recruiter/RecruiterLayout'; // New Layout
import RecruiterMessages from './components/dashboards/recruiter/RecruiterMessages'; // New Page
import RecruiterSettings from './components/dashboards/recruiter/RecruiterSettings'; // New Page

function App() {
  const location = useLocation();

  return (
    <div className="antialiased bg-background-dark text-white min-h-screen">
      <PageTitle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={
            <PageTransition>
              <Landing />
            </PageTransition>
          } />
          <Route path="/auth" element={
            <PageTransition>
              <AuthPage />
            </PageTransition>
          } />

          {/* Candidate Routes */}
          <Route path="/dashboard/candidate">
            {/* Layout-wrapped routes */}
            <Route element={<CandidateLayout />}>
              <Route index element={
                <PageTransition>
                  <CandidateDashboard />
                </PageTransition>
              } />
              <Route path="jobs" element={
                <PageTransition>
                  <CandidateJobSearch />
                </PageTransition>
              } />
              <Route path="freshers" element={
                <PageTransition>
                  <CandidateFreshers />
                </PageTransition>
              } />
              <Route path="messages" element={
                <PageTransition>
                  <CandidateMessages />
                </PageTransition>
              } />
              <Route path="applications" element={
                <PageTransition>
                  <CandidateApplications />
                </PageTransition>
              } />
              <Route path="settings" element={
                <PageTransition>
                  <CandidateSettings />
                </PageTransition>
              } />
              <Route path="company-profile" element={
                <PageTransition>
                  <CompanyProfile />
                </PageTransition>
              } />
            </Route>

            {/* Standalone routes (own layout) */}
            <Route path="profile" element={
              <PageTransition>
                <CandidateProfileBuilder />
              </PageTransition>
            } />
          </Route>



          {/* Recruiter Routes */}
          <Route path="/dashboard/recruiter" element={<RecruiterLayout />}>
            <Route index element={
              <PageTransition>
                <RecruiterDashboard />
              </PageTransition>
            } />
            <Route path="post-job" element={
              <PageTransition>
                <PostJob />
              </PageTransition>
            } />
            <Route path="jobs" element={
              <PageTransition>
                <RecruiterJobs />
              </PageTransition>
            } />
            <Route path="applications" element={
              <PageTransition>
                <RecruiterApplications />
              </PageTransition>
            } />
            <Route path="messages" element={
              <PageTransition>
                <RecruiterMessages />
              </PageTransition>
            } />
            <Route path="interviews" element={
              <PageTransition>
                <RecruiterInterviews />
              </PageTransition>
            } />
            <Route path="company-profile" element={
              <PageTransition>
                <CompanyProfile />
              </PageTransition>
            } />
            <Route path="settings" element={
              <PageTransition>
                <RecruiterSettings />
              </PageTransition>
            } />
          </Route>

          {/* Admin Routes */}
          <Route path="/dashboard/admin" element={
            <PageTransition>
              <AdminDashboard />
            </PageTransition>
          }>
            <Route index element={<AdminOverview />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="moderation" element={<AdminModeration />} />
            <Route path="support" element={<AdminSupport />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div >
  );
}

export default App;
