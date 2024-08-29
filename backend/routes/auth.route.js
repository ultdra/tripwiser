const express = require('express')
const router = express.Router()

//Using functions from controller
const {ValidateGoogleToken} = require('../Controller/auth')

router.post('/validateGoogleAuth', ValidateGoogleToken)

module.exports = router;