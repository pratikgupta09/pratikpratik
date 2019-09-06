export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search(callback) {
        Student.find().exec(callback)
    },
    getOne(data, callback) {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    }
}
