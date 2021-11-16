const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: String,
    course: String,
    semester: Number,
    ra: Number,
    cpf: Number,
    city: String,
});

module.exports = mongoose.model("Student", StudentSchema);