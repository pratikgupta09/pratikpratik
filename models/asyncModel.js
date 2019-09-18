var async = require("async")
//var teachers = require("./teachersModel")
export default {
    myasync: function(data, callback) {
        console.log("::::::::::::::::::")
        var page = 1
        var limit = 2
        var checkPagination = true
        async.whilst(
            function testCondition(callback) {
                console.log("checkPagination", checkPagination)
                callback(null, checkPagination)
            },

            function(callback) {
                async.waterfall(
                    [
                        function(callback) {
                            //     // console.log("function1")
                            callback(null, data)
                        },
                        function(data, callback) {
                            // console.log("22222222")
                            console.log("skip value -", page * limit - limit)
                            teachers
                                .find()
                                .skip(page * limit - limit)
                                .limit(limit)
                                .exec(callback)
                        },
                        function(users, callback) {
                            page++
                            if (users.length < limit) {
                                checkPagination = false
                            }
                            // console.log("users1111--", users)
                            console.log("arraySize ", users.length)
                            console.log("limit ", limit)
                            async.each(
                                users,
                                function(user, callback) {
                                    asyncModel.doFunctinality(user, callback)
                                },
                                callback
                            )
                        }
                    ],
                    callback
                )
            },
            function(err) {
                callback(null, null)
            }
        )
    },
    doFunctinality: function(user, callback) {
        console.log("user--", user)
        console.log(" hii I am " + user.teacher_firstname)
        callback(null, user)
    }
}
