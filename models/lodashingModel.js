// var async = require("async")
// const _ = require("lodash")
// var Students = require("../mongooseModel/Students.js")
var mydata

export default {
    searching: function(_query, callback) {
        console.log("searching is working", _query)
        async.waterfall(
            [
                function(callback) {
                    console.log("function1")
                    callback(null, _query)
                },
                function(_query, callback) {
                    console.log("function2")
                    mydata = Students.find({}).exec(callback)
                    // callback(null, mydata)
                }
                //    c1)
                //         console.log(";;;;;;;;;;;;;;;;;;")
                //         let c2 = _.slice(mydata, 2, 6)
                //         console.log(c2)
                //         callback(null, c2) function(mydata, callback) {
                //         // let c1 = _.chunk(mydata, 2)
                //         // console.log(":::::::::::::::::::")
                //         // console.log(c1)
                //         // callback(null,
                //     }
            ],

            function(err, result) {
                console.log(result)
                console.log(".........")
                console.log("mydata" + mydata)
                callback(err, result)
            }
        )
    }
}
