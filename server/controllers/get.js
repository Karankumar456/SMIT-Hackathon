const { Courses, User } = require('../model')

const getCourses = async (req, res) => {
    try {
        const { body } = req

        Courses.find({}, async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({ success: false, message: 'Something Went Wrong!' })
            }

            return res.send({ success: true, result })
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}


const getAllRegisterdStudent = (req, res) => {
    try {
        // const { body } = req
        User.find({}, async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({ success: false, message: 'Something Went Wrong!' })
            }
            return res.send({ success: true, result })
        })
    } catch (error) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = {
    getCourses,
    getAllRegisterdStudent
}