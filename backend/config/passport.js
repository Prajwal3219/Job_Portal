const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const Candidate = require('../models/Candidate');

module.exports = function (passport) {
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
        passport.use(
            new GoogleStrategy(
                {
                    clientID: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    callbackURL: '/api/auth/google/callback',
                },
                async (accessToken, refreshToken, profile, done) => {
                    const newUser = {
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        role: 'talent'
                    };

                    try {
                        let user = await Candidate.findOne({ googleId: profile.id });

                        if (user) {
                            done(null, user);
                        } else {
                            user = await Candidate.create(newUser);
                            done(null, user);
                        }
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

    if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
        passport.use(
            new GitHubStrategy(
                {
                    clientID: process.env.GITHUB_CLIENT_ID,
                    clientSecret: process.env.GITHUB_CLIENT_SECRET,
                    callbackURL: '/api/auth/github/callback',
                },
                async (accessToken, refreshToken, profile, done) => {
                    const newUser = {
                        githubId: profile.id,
                        name: profile.displayName || profile.username,
                        email: profile.emails ? profile.emails[0].value : `${profile.username}@github.com`,
                        role: 'talent'
                    };

                    try {
                        let user = await Candidate.findOne({ githubId: profile.id });

                        if (user) {
                            done(null, user);
                        } else {
                            user = await Candidate.create(newUser);
                            done(null, user);
                        }
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
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await Candidate.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
};
