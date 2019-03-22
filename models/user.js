var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
    new LocalStrategy(
        // Our user will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        function (email, password, done) {
            // When a user tries to sign in this code runs
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function (dbUser) {
                // If there's no user with the given email
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect email."
                    });
                }
                // If there is a user with the given email, but the password the user gives us is incorrect
                else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                // If none of the above, return the user
                return done(null, dbUser);
            });
        }
    )
);

passport.use(
    "local-signup",
    new LocalStrategy(
        // Our user will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        function (email, password, done) {
            console.log("made it")
            // When a user tries to sign in this code runs
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function (dbUser) {
                // If there's no user with the given email
                if (dbUser) {
                    console.log("dbUser", dbUser);
                    return done(null, false, {
                        message: "User already exists"
                    });
                }
                db.User.create({
                    email: email,
                    password: password
                })
                    .then(function (newUser) {
                        return done(null, newUser);
                    })
                    .catch(function (err) {
                        return done(err);
                    });
            });
        }
    )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;