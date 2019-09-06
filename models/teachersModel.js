export default {
    search(callback) {
        teachers.find().exec(callback)
    },
    getTwo(data, callback) {
        teachers
            .findOne({
                _id: data.id
            })
            .exec(callback)
    },
    saveData: (data, callback) => {
        const Teacher = new teachers(data)
        Teacher.save(callback)
    },
    deleteData: (data, callback) => {
        teachers
            .findByIdAndRemove({
                _id: data.id
            })
            .exec(callback)
    },
    updateById: (data, callback) => {
        teachers
            .updateOne(
                { _id: data.params.id },
                {
                    teacher_firstname: data.body.teacher_firstname,
                    teacher_lastname: data.body.teacher_lastname
                }
            )
            .exec(function(err, data) {
                if (err) {
                    callback(err, null)
                } else if (_.isEmpty(data)) {
                    callback(null, "No data found")
                } else {
                    callback(null, data)
                }
            })
        // .then((teachers) => {
        //     if (!teachers) {
        //         return res.status(404).send({
        //             message: "Data not found with id " + req.params.id
        //         })
        //     }
        //     data.send(teachers)
        // })
        // .catch((err) => {
        //     if (err.kind === "ObjectId") {
        //         return res.status(404).send({
        //             message: "Data not found with id " + req.params.id
        //         })
        //     }
        // })
    }
}
