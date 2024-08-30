const express = require('express')
const router = express.Router()

//Using functions from controller
const {ValidateGoogleToken} = require('../Controller/auth')
const passport = require('passport')

router.post('/validateGoogleAuth', async (req, res) => {
    await ValidateGoogleToken(req, res)
})

router.get('/googlecallback', (req, res) => {
    res.redirect("/");
}
)

module.exports = router;