const router = Router()
router.get("/", (req, res) => {
    parallelModel.search(req, res)
})
router.get("/:id", (req, res) => {
    parallelModel.searching(req.params, res.callback)
})
export default router
