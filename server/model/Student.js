const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema({
    // name: { type: String },
    registrationNumber: { type: String },
}
)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student