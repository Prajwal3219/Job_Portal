const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Recruiter = require('../models/Recruiter');

// @desc    Register new recruiter
// @route   POST /api/recruiter/register
// @access  Public
const registerRecruiter = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all required fields');
    }

    // Check if recruiter exists
    const recruiterExists = await Recruiter.findOne({ email });

    if (recruiterExists) {
        res.status(400);
        throw new Error('Recruiter already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create recruiter
    const recruiter = await Recruiter.create({
        name,
        email,
        password: hashedPassword
    });

    if (recruiter) {
        res.status(201).json({
            _id: recruiter.id,
            name: recruiter.name,
            email: recruiter.email,
            token: generateToken(recruiter._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid recruiter data');
    }
});

// @desc    Authenticate a recruiter
// @route   POST /api/recruiter/login
// @access  Public
const loginRecruiter = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const recruiter = await Recruiter.findOne({ email });

    if (recruiter && (await bcrypt.compare(password, recruiter.password))) {
        res.json({
            _id: recruiter.id,
            name: recruiter.name,
            email: recruiter.email,
            token: generateToken(recruiter._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

// @desc    Get recruiter data
// @route   GET /api/recruiter/me
// @access  Private
const getRecruiterMe = asyncHandler(async (req, res) => {
    const recruiter = await Recruiter.findById(req.user.id).select('-password');
    res.status(200).json(recruiter);
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    registerRecruiter,
    loginRecruiter,
    getRecruiterMe,
};
