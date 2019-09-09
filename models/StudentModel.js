export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search(callback) {
        Students.find().exec(callback)
    },
    getOne(data, callback) {
        Students.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Students(data)
        student.save(callback)
    }
}
