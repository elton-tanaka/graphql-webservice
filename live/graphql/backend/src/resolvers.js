const Student = require('./Student');

module.exports = {
    Query: {
        students: () => Student.find(),
        student: (_, { id }) => Student.findById(id)
    },

    Mutation: {
        createStudent: (_, { name, course, semester, ra, cpf, city }) => Student.create({ name, course, semester, ra, cpf, city }),
    },
};