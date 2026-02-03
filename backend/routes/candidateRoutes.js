const express = require('express');
const router = express.Router();
const {
    registerCandidate,
    loginCandidate,
    getMe,
    updateProfile,
} = require('../controllers/candidateController');
const { protect } = require('../middleware/authMiddleware');

const passport = require('passport');

router.post('/register', registerCandidate);
router.post('/login', loginCandidate);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/auth' }),
    (req, res) => {
        const role = req.user.role === 'recruiter' ? 'recruiter' : 'candidate';
        res.redirect(`http://localhost:3000/dashboard/${role}`);
    }
);

// GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: 'http://localhost:3000/auth' }),
    (req, res) => {
        const role = req.user.role === 'recruiter' ? 'recruiter' : 'candidate';
        res.redirect(`http://localhost:3000/dashboard/${role}`);
    }
);

module.exports = router;
