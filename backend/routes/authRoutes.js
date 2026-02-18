const express = require('express');
const router = express.Router();
const passport = require('passport');

// @route   GET /api/auth/github/callback
// @desc    GitHub auth callback
// @access  Public
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: 'http://localhost:3000/auth' }),
    (req, res) => {
        // Successful authentication, redirect home.
        const role = req.user.role || 'talent'; // Default to talent if undefined
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        if (role === 'recruiter') {
            res.redirect(`http://localhost:5173/dashboard/recruiter?token=${token}`);
        } else {
            res.redirect(`http://localhost:5173/dashboard/candidate?token=${token}`);
        }
    }
);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @route   GET /api/auth/google/callback
// @desc    Google auth callback
// @access  Public
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/auth' }),
    (req, res) => {
        const role = req.user.role || 'talent'; // Default to talent if undefined
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        if (role === 'recruiter') {
            res.redirect(`http://localhost:5173/dashboard/recruiter?token=${token}`);
        } else {
            res.redirect(`http://localhost:5173/dashboard/candidate?token=${token}`);
        }
    }
);

module.exports = router;
