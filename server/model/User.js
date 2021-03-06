const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    registrationNumber: { type: String },
    cnic: { type: String },
    password: { type: String },
}
)

const User = mongoose.model('User', userSchema)

module.exports = User