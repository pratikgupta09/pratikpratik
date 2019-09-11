const router = Router()
router.get("/hello", (req, res) => {
    lodashingModel.searching(req.query, res.callback)
})
export default router
