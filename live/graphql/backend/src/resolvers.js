const Student = require('./Student');

module.exports = {
    Query: {
        students: () => Student.find(),
        student: (_, { id }) => Student.findById(id)
    },

    Mutation: {
        createStudent: (_, { name, course, semester, ra, cpf, city }) => Student.create({ name, course, semester, ra, cpf, city }),
        deleteStudentById: (_, { id }) => Student.findByIdAndDelete(id),
        editStudentById: (_, { id, name, course, semester, ra, cpf, city }) => Student.findByIdAndUpdate(id, { name, course, semester, ra, cpf, city })
    },
};