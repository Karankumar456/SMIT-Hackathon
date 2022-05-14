const { Courses, Student, User } = require('../model')
const courses = (req, res) => {
    try {
        const { body } = req
        if (!body?.name || !body?.description || !body?.enrollStudent) {
            return res.send({ success: false, message: 'please fill all required fileds!' })
        }
        let addCourses = new Courses(body)
        addCourses.save().then((result) => {
            return res.send({ success: true, result, message: "Created Course successfully" })
        }).catch((err) => {
            console.log(err)
            return res.send({ success: false, message: 'Something Went Wrong!' })
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'something Went Wrong!' })
    }
}

const registerStudent = (req, res) => {
    try {
        const { body } = req
        if (!body?.registrationNumber) {
            return res.send({ success: false, message: 'please fill all required fileds!' })
        }

        let addStudent = new Student(body)
        addStudent.save().then((result) => {
            return res.send({ success: true, result, message: "Student register successfully" })
        }).catch((err) => {
            console.log(err)
            return res.send({ success: false, message: 'Something Went Wrong!' })
        })
    } catch (error) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = { courses, registerStudent }