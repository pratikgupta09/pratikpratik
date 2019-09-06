const router = Router()
router.get("/", (req, res) => {
    teachersModel.search(res.callback)
})

// router.get("/:id", (req, res) => {
//     teachersModel.getOne(res.callback)
// })
router.get("/:id", (req, res) => {
    teachersModel.getTwo(res.callback)
})
// router.delete("/:id", (req, res) => {
//     console.log("req.params::::", req.params)
//     teachersModel.deleteData(req.params, res.callback)
//     res.send(`Delete For Id ${req.params.id}`)
//     // const Teacher = new teachers(req.body)
//     // Teacher.save(res.callback)
// })
router.put("/:id", (req, res) => {
    teachersModel.updateById(req, res.callback)
    // res.send(`Update For Id ${req.params.id}`)
})
export default router
