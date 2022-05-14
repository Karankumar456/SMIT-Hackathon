const express = require('express')
const router = express.Router()
const { signUp, login, AdminSignup, AdminLogin } = require('../controllers/auth')

router.post('/signup', signUp)
router.post('/Admin-signup', AdminSignup)
router.post('/login', login)
router.post('/Admin-login', AdminLogin)
module.exports = router
