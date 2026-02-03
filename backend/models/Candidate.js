const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },
    role: {
        type: String,
        enum: ['talent', 'admin'],
        default: 'talent'
    },
    profileInfo: {
        bio: String,
        badges: [String],
        isOpenToWork: {
            type: Boolean,
            default: true
        },
        avatar: String,
        title: String
    },
    education: [{
        school: String,
        degree: String,
        year: String,
        grade: String,
        logo: String
    }],
    skills: [String],
    certifications: [{
        title: String,
        issuer: String,
        date: String,
        link: String
    }],
    projects: [{
        title: String,
        desc: String,
        stack: [String],
        githubLink: String,
        liveLink: String
    }],
    links: {
        github: String,
        portfolio: String,
        linkedin: String
    },
    experience: [{
        role: String,
        company: String,
        date: String,
        desc: String,
        active: Boolean
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', candidateSchema);
