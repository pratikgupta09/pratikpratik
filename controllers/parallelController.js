const router = Router()
router.get("/", (req, res) => {
    parallelModel.search(req, res)
})
router.get("/:id", (req, res) => {
    console.log("parallel hit")
    parallelModel.searching(req.params, res.callback)
})

router.get("/async/abc/", (req, res) => {
    console.log("async hit")
    asyncModel.myasync(req.params, res.callback)
})
export default router
