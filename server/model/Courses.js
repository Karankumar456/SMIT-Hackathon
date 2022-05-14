const mongoose = require('mongoose')
const { Schema } = mongoose

const coursesSchema = new Schema({
    name: { type: String },
    enrollStudent: { type: Number },
    description: { type: String },
}
)

const Courses = mongoose.model('Courses', coursesSchema)

module.exports = Courses