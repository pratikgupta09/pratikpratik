// var async = require("async")
// const _ = require("lodash")
// var Students = require("../mongooseModel/Students.js")
var mydata

export default {
    searching: function(data, callback) {
        async.waterfall(
            [
                function(callback) {
                    console.log("function1")
                    mydata = Students.find({}).exec(callback)
                    console.log("mydata:", mydata)
                },
                function(mydata, callback) {
                    //     console.log("function2")
                    //     let c2 = _.slice(mydata, 2, 6)
                    //     console.log(c2)
                    //     callback(null, c2)
                    // }

                    // let c1 = _.chunk(mydata, 2)
                    // console.log(":::::::::::::::::::")
                    // console.log(c1)
                    // callback(null, c1)

                    // let word = _.sample(mydata)
                    // console.log(word)
                    // callback(null, word)

                    let form = _.shuffle(mydata)
                    console.log(form)
                    callback(null, form)
                }
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
