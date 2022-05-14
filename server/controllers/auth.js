const bcrypt = require('bcryptjs')
const { User, Admin, Student } = require('../model')
const signUp = async (req, res) => {
    try {
        const { body } = req
        let registrationNumber = body?.registrationNumber
        const StudentRegisterNumber = await Student.findOne({ registrationNumber }).exec()
        // console.log(StudentRegisterNum   ber)
        if (!StudentRegisterNumber) {
            return res.send({ success: true, message: "registration Number Not found" })
        }

        // if(StudentRegisterNumber?. == registrationNumber)
        let cnic = body?.cnic
        const AlreadyRegisterNumber = await User.findOne({ registrationNumber }).exec()
        console.log(AlreadyRegisterNumber)
        let verifyCnic = await User.findOne({ cnic }).exec()
        console.log(verifyCnic)

        if (verifyCnic == null) {
            let addUser = new User(body)
            addUser.save().then((result) => {
                return res.send({ success: true, result, message: "Created successfully" })
            }).catch((err) => {
                console.log(err)
                return res.send({ success: false, message: 'Something Went Wrong!' })
            })
        } else {
            return res.send({ success: true, message: "Account Already in use" })
        }
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

const login = async (req, res) => {
    try {
        const { body } = req
        const registrationNumber = body?.registrationNumber
        const password = body?.password
        User.findOne({ registrationNumber }, async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({ success: false, message: 'Something Went Wrong!' })
            }
            let matchpwd = result?.password === password
            console.log(matchpwd)
            if (!matchpwd) {
                return res.send({ success: false, message: 'Invalid Credentials!' })
            }
            return res.send({ success: true, result })
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

const AdminSignup = (req, res) => {
    try {
        const { body } = req
        let addAdmin = new Admin(body)
        if (!body?.email || !body?.password) {
            return res.send({ success: false, message: 'please fill all required fileds!' })
        }
        addAdmin.save().then((result) => {
            return res.send({ success: true, result, message: "addAdmin successfully" })
        }).catch((err) => {
            console.log(err)
            return res.send({ success: false, message: 'Something Went Wrong!' })
        })

    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

const AdminLogin = async (req, res) => {
    try {
        const { body } = req
        const email = body?.email
        const password = body?.password
        Admin.findOne({ email }, async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({ success: false, message: 'Something Went Wrong!' })
            }
            let matchpwd = result?.password === password
            console.log(matchpwd)
            if (!matchpwd) {
                return res.send({ success: false, message: 'Invalid Credentials!' })
            }
            return res.send({ success: true, result })
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = {
    signUp, login, AdminSignup, AdminLogin
}