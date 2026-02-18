const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const Candidate = require('../models/Candidate');
const Recruiter = require('../models/Recruiter');

module.exports = function (passport) {
    console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'Loaded' : 'Missing');
    console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'Loaded' : 'Missing');

    // Google Strategy for Candidates (Keep as is)
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
        passport.use(
            new GoogleStrategy(
                {
                    clientID: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    callbackURL: '/api/auth/google/callback',
                    passReqToCallback: true
                },
                async (req, accessToken, refreshToken, profile, done) => {
                    const role = req.session.role || 'talent'; // Get role from session

                    const newUser = {
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        role: role
                    };

                    try {
                        let user;
                        if (role === 'recruiter') {
                            newUser.password = 'oauth-login-no-password'; // Placeholder for recruiter
                            user = await Recruiter.findOne({ googleId: profile.id });
                            if (!user) {
                                user = await Recruiter.create(newUser);
                            }
                        } else {
                            // Default to candidate (talent)
                            newUser.role = 'talent'; // Ensure role is talent
                            user = await Candidate.findOne({ googleId: profile.id });
                            if (!user) {
                                user = await Candidate.create(newUser);
                            }
                        }
                        done(null, user);
                    } catch (err) {
                        console.error(err);
                        done(err, null);
                    }
                }
            )
        );
    } else {
        console.warn('Google OAuth credentials missing. Google login will not work.');
    }

    // GitHub Strategy (Shared for both Candidates and Recruiters)
    if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
        passport.use(
            new GitHubStrategy(
                {
                    clientID: process.env.GITHUB_CLIENT_ID,
                    clientSecret: process.env.GITHUB_CLIENT_SECRET,
                    callbackURL: '/api/auth/github/callback',
                    passReqToCallback: true
                },
                async (req, accessToken, refreshToken, profile, done) => {
                    const role = req.session.role || 'talent'; // Get role from session

                    const newUser = {
                        githubId: profile.id,
                        name: profile.displayName || profile.username,
                        email: profile.emails ? profile.emails[0].value : `${profile.username}@github.com`,
                        role: role
                    };

                    try {
                        let user;
                        if (role === 'recruiter') {
                            newUser.password = 'oauth-login-no-password'; // Placeholder for recruiter
                            user = await Recruiter.findOne({ githubId: profile.id });
                            if (!user) {
                                user = await Recruiter.create(newUser);
                            }
                        } else {
                            // Default to candidate (talent)
                            newUser.role = 'talent'; // Ensure role is talent
                            user = await Candidate.findOne({ githubId: profile.id });
                            if (!user) {
                                user = await Candidate.create(newUser);
                            }
                        }

                        // Append role to user object to help with serialization/redirection if needed immediately
                        // Mongoose documents are not plain objects, so we might need to rely on the instance type or just trust role field
                        return done(null, user);

                    } catch (err) {
                        console.error(err);
                        done(err, null);
                    }
                }
            )
        );
    } else {
        console.warn('GitHub OAuth credentials missing. GitHub login will not work.');
    }

    passport.serializeUser((user, done) => {
        done(null, { id: user.id, role: user.role });
    });

    passport.deserializeUser(async (obj, done) => {
        try {
            let user;
            if (obj.role === 'recruiter') {
                user = await Recruiter.findById(obj.id);
            } else {
                user = await Candidate.findById(obj.id);
            }
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
};
