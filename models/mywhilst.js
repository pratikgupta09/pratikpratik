var async = require("async")

var counter = 0

async.whilst(
    function testCondition() {
        return counter < 5
    },
    function increaseCounter(callback) {
        counter++
        console.log("counter is now", counter)

        setTimeout(callback("err"), 1000)
    },
    function callback(err) {
        if (err) {
            console.log(err)
            return
        }

        console.log("Job complete")
    }
)
