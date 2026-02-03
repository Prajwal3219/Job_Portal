import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'SkillHire - Find Your Dream Job';

        if (path === '/') {
            title = 'SkillHire - Home';
        } else if (path === '/auth') {
            title = 'Login / Sign Up | SkillHire';
        } else if (path.startsWith('/dashboard/candidate/profile')) {
            title = 'My Profile | SkillHire';
        } else if (path.startsWith('/dashboard/candidate')) {
            title = 'Candidate Dashboard | SkillHire';
        } else if (path.startsWith('/dashboard/recruiter/post-job')) {
            title = 'Post a Job | SkillHire';
        } else if (path.startsWith('/dashboard/recruiter')) {
            title = 'Recruiter Dashboard | SkillHire';
        } else if (path.startsWith('/dashboard/admin')) {
            title = 'Admin Dashboard | SkillHire';
        }

        document.title = title;
    }, [location]);

    return null;
};

export default PageTitle;
