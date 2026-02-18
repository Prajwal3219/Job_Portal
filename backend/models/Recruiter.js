const mongoose = require('mongoose');

const recruiterSchema = mongoose.Schema({
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
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    role: {
        type: String,
        default: 'recruiter'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
