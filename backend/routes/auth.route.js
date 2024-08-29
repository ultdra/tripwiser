const express = require('express')
const router = express.Router()
const {OAuth2Client} = require('google-auth-library')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

router.post('/validateGoogleAuth', async (req, res) => {
    const {token} = req.body

    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          res.json({ userId: userid, email: payload['email'] });
    }
    catch(error)
    {
        console.error("Error verifying Google Token:", error)
        res.status(401).json({error:'Invalid Token'})
    }
})

router.


module.exports = router;