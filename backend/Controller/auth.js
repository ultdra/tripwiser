const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

//Strategy for validating google sign in
passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/googlecallback"
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile)
  }
))

const ValidateGoogleToken = async (req,res) => {
    console.log(req.body)
    const {token} = req.body

    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          return res.json({ userId: userid, email: payload['email'] });
    }
    catch(error)
    {
        console.error("Error verifying Google Token:", error)
        return res.status(401).json({error:'Invalid Token'})
    }
}

passport.serializeUser((user, done) => {
    done(null, user)
})
  
passport.deserializeUser((user,done) => {
    done(null, user)
})

module.exports = ValidateGoogleToken