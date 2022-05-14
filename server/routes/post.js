
const express = require('express')
const router = express.Router()
const { courses ,registerStudent} = require('../controllers/post')

router.post('/courses', courses)
router.post('/register-student', registerStudent)
// router.post('/login', login)

module.exports = router
