const express = require('express');
const router = express.Router();
const {
    registerRecruiter,
    loginRecruiter,
    getRecruiterMe,
} = require('../controllers/recruiterController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerRecruiter);
router.post('/login', loginRecruiter);
router.get('/me', protect, getRecruiterMe);

// GitHub OAuth
const passport = require('passport'); // Ensure passport is required if not already
router.get('/github', (req, res, next) => {
    req.session.role = 'recruiter';
    passport.authenticate('github', { scope: ['user:email'] })(req, res, next);
});

// Google OAuth
router.get('/google', (req, res, next) => {
    req.session.role = 'recruiter';
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

module.exports = router;
