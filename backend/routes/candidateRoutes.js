const express = require('express');
const router = express.Router();
const {
    registerCandidate,
    loginCandidate,
    getMe,
    updateProfile,
    uploadProfileImage,
} = require('../controllers/candidateController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const passport = require('passport');

router.post('/register', registerCandidate);
router.post('/login', loginCandidate);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/upload-profile-image', protect, upload.single('profileImage'), uploadProfileImage);
router.post('/upload-certificate-image', protect, upload.single('certificateImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload a file' });
    }
    res.json({ image: `/uploads/${req.file.filename}` });
});

// Google OAuth
router.get('/google', (req, res, next) => {
    req.session.role = 'candidate';
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

// GitHub OAuth
router.get('/github', (req, res, next) => {
    req.session.role = 'candidate';
    passport.authenticate('github', { scope: ['user:email'] })(req, res, next);
});

module.exports = router;
