var async = require("async")
export default {
    search: function(_query, callback) {
        async.parallel(
            {
                Students: async function(callback) {
                    console.log("task one")
                    const student = await Students.find().exec()
                    console.log("students:" + student)
                    callback(null, student)
                },
                teachers: async function(callback) {
                    console.log("second task")
                    const teacherr = await teachers.find().exec()
                    console.log("teachers" + teacherr)
                    callback(null, teacherr)
                }
            },
            function(err, result) {
                console.log("ok")
                callback(null, result)
            }
        )
    },
    searching: function(data, callback) {
        console.log("searching is working")
        async.waterfall(
            [
                function(callback) {
                    console.log("function1")
                    callback(null, data.id)
                },
                function(mydata, callback) {
                    console.log("function2", mydata)
                    const teach = teachers
                        .findOne({
                            _id: mydata
                        })
                        .exec(callback)
                },
                function(teach, callback) {
                    console.log("studentssid", teach.Student)

                    const exam = teach.Student
                    console.log(exam)
                    Students.findOne({
                        _id: exam
                    }).exec(callback)
                }
            ],
            function(err, result) {
                console.log(result)
                callback(null, result)
            }
        )
    }
}
