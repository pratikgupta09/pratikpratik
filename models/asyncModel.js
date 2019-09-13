var async = require("async")
//var teachers = require("./teachersModel")
export default {
    // doFunctinality function(user,callback){
    //   console.log("I am ",user.name)
    //   callback(null,null)
    // }
    // var checkEndOfUser = true
    // var page = 0
    // var limit = 20

    // async.whilst(
    //   function(cb) {
    //     cb(null, doFunctinality;
    //   },
    //   function(callback) {
    //     async.waterfall([
    //       function(callback{

    //     },
    //     function(users,callback){
    //       async.each(users, (user,callback)){
    //         doFunctinality
    //       },
    //       callback(){
    //         return user < 10

    //       }

    //       doFunctinality = false

    myasync: function(data, callback) {
        console.log("::::::::::::::::::")
        const page = 1
        const limit = 5
        // async.whilst(
        async.waterfall(
            [
                function(callback) {
                    console.log("function1")
                    callback(null, data)
                },
                async function(data, callback) {
                    console.log("22222222")
                    console.log("skip value -", page * limit - limit)
                    await teachers
                        .find()
                        // exec(callback)
                        // callback(null, users)
                        .skip(page * limit - limit)
                        .limit(limit)
                        .exec(callback)

                    // console.log("users", users)
                },
                function(users, callback) {
                    console.log("users1111--", users)
                    async.each(users, function(user, callback) {
                        doFunctinality(user)
                    })
                }
            ],
            function(err, result) {
                console.log(result)
                callback(null, result)
            }
        )
        // )
    }
}
function doFunctinality(users) {
    //  console.log("mmmmmm" + users)
    console.log(" hii I am " + users.teacher_firstname)
}
