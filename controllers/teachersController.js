const router = Router()
router.get("/", (req, res) => {
    teachersModel.search(res.callback)
})

// router.get("/:id", (req, res) => {
//     teachersModel.getOne(res.callback)
// })
router.get("/:id", (req, res) => {
    teachersModel.getTwo(req.params, res.callback)
})
router.delete("/:id", (req, res) => {
    console.log("req.params::::", req.params)
    teachersModel.deleteData(req.params, res.callback)
    res.send(`Delete For Id ${req.params.id}`)
})
router.put("/:id", (req, res) => {
    teachersModel.updateById(req, res.callback)
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    console.log("hi")
    teachersModel.patchObject(req, res.callback)
    console.log("hello")
})
router.post("/", (req, res) => {
    teachersModel.saveData(req.body, res.callback)
})
router.get("/hello/:page", (req, res) => {
    console.log("hi")
    teachersModel.pagin(req, res.callback)
})

export default router
