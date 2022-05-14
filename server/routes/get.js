
const express = require('express')
const router = express.Router()
const { getCourses, getAllRegisterdStudent } = require('../controllers/get')

router.get('/get-courses', getCourses)
router.get('/get-students', getAllRegisterdStudent)
// router.post('/login', login)

module.exports = router
