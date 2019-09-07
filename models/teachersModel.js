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
                    teacher_lastname: data.body.teacher_lastname,
                    teacher_id: data.body_teacher_id
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
    },
    patchObject: (data, callback) => {
        var updatemyrecord = {}
        for (var field in teachers) {
            updatemyrecord["somekey." + field] = teachers[field]
        }
        teachers
            .updateOne({ _id: data.params.id }, { $set: updatemyrecord })
            .exec(callback)
        // .exec(function(err, data) {
        //     if (err) {
        //         callback(err, null)
        //     } else if (_.isEmpty(data)) {
        //         callback(null, "No data found")
        //     } else {
        //         callback(null, data)
        //     }
        // })
    },
    pagin: (data, callback) => {
        var pageno = data.params.page
        var size = 3
        teachers
            .find()
            .skip(pageno * size - size)
            .limit(size)
            .exec(callback)
    }
}
