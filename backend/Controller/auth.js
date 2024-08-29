const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy

//Strategy for validating google sign in
passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/googlecallback"
  }))

passport.serializeUser((user, done) => {
    done(null, user)
})
  
passport.deserializeUser((user,done) => {
    done(null, user)
})