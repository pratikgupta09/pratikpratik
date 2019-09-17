var mochatest = require("../mochatest")
var chai = require("chai")
let chaiHttp = require("chai-http")
var expect = chai.expect
// let should = chai.should()
chai.use(chaiHttp)
const server = "http://localhost:3000/teachers"
// describe("mochatest", function() {
//     it("first should return hello world", function() {
//         assert.equal(mochatest(), "hello world")
//     })
// })
// describe("/POST book", () => {
//     it("it should not POST a book without pages field", (done) => {
//         let tudent = {
//             name: "qwert",
//             parent: "J.R.R. Tolkien",
//             email: "abc@gmail.com"
//         }
//         chai.request(server)
//             .post("/")
//             .send(tudent)
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 done()
//             })
//     })
// })
// describe("/get my request", () => {
//     it("testing get response", (done) => {
//         // let tudent = {
//         //     _id: "5d80873d72921d02a27496ec"
//         // }
//         chai.request(server)
//             .get("/")
//             // .send(tudent)
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 console.log(
//                     "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
//                     res.body
//                 )
//                 done()
//             })
//     })
// })

// /

describe("Books", function() {
    describe("DELETE ALL", function() {
        it("should remove all first", (done) => {
            console.log("Deleting all data in db first.")
            chai.request(server)
                .delete("/5d737f47054cf5062b401290")
                .send({})
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    console.log("Response Body:", res.body)
                    done()
                })
        })
    })
    /// some other tests we will write here
})

// it("Should confirm delete with number of Docs from DB", (done) => {
//     chai.request(server)
//         .get("/")
//         .end((err, res) => {
//             expect(err).to.be.null
//             expect(res).to.have.status(200)
//             console.log("Got", res.body)
//             //console.log ("Result Body:", result.body);
//             done()
//         })
// })

// describe("/update my request", () => {
//     it("should remove all first", (done) => {
//         let id = "5d71fd04b3dd2d0576dd2791"
//         // let tudent =
//         chai.request(server)
//             .put("/" + id + "")
//             .send({
//                 teacher_firstname: "heya",
//                 teacher_lastname: "hola"
//             })
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 console.log(
//                     "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
//                     res.body
//                 )
//                 done()
//             })
//     })

// })
