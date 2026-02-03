const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Candidate = require('../models/Candidate');

// @desc    Register new candidate
// @route   POST /api/candidate/register
// @access  Public
const registerCandidate = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if candidate exists
    const trimmedEmail = email.toLowerCase().trim();
    const candidateExists = await Candidate.findOne({ email: trimmedEmail });

    if (candidateExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create candidate
    try {
        const candidate = await Candidate.create({
            name,
            email: trimmedEmail,
            password: hashedPassword,
            role: role || 'talent'
        });

        if (candidate) {
            res.status(201).json({
                _id: candidate.id,
                name: candidate.name,
                email: candidate.email,
                role: candidate.role,
                token: generateToken(candidate._id),
            });
        }
    } catch (error) {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Authenticate a candidate
// @route   POST /api/candidate/login
// @access  Public
const loginCandidate = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide email and password');
    }

    const trimmedEmail = email.toLowerCase().trim();

    // Check for candidate email
    const candidate = await Candidate.findOne({ email: trimmedEmail });

    if (!candidate) {
        res.status(401);
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, candidate.password);

    if (isMatch) {
        res.json({
            _id: candidate.id,
            name: candidate.name,
            email: candidate.email,
            role: candidate.role,
            token: generateToken(candidate._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

// @desc    Get candidate data
// @route   GET /api/candidate/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// @desc    Update candidate profile
// @route   PUT /api/candidate/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
    const candidate = await Candidate.findById(req.user._id);

    if (candidate) {
        candidate.profileInfo = req.body.profileInfo || candidate.profileInfo;
        candidate.education = req.body.education || candidate.education;
        candidate.skills = req.body.skills || candidate.skills;
        candidate.certifications = req.body.certifications || candidate.certifications;
        candidate.projects = req.body.projects || candidate.projects;
        candidate.links = req.body.links || candidate.links;
        candidate.experience = req.body.experience || candidate.experience;

        const updatedCandidate = await candidate.save();

        res.json({
            _id: updatedCandidate._id,
            name: updatedCandidate.name,
            email: updatedCandidate.email,
            role: updatedCandidate.role,
            profileInfo: updatedCandidate.profileInfo,
            education: updatedCandidate.education,
            skills: updatedCandidate.skills,
            certifications: updatedCandidate.certifications,
            projects: updatedCandidate.projects,
            links: updatedCandidate.links,
            experience: updatedCandidate.experience,
        });
    } else {
        res.status(404);
        throw new Error('Candidate not found');
    }
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    registerCandidate,
    loginCandidate,
    getMe,
    updateProfile,
};
