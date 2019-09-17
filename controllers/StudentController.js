const router = Router()

router.post("/", (req, res) => {
    StudentModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`Delete For Id ${req.params.id}`)
})
router.get(
    "/:id",
    // ValidateRequest({
    //     params: {
    //         type: "object",
    //         properties: {
    //             id: {
    //                 type: "string",
    //                 format: "objectId"
    //             }
    //         }
    //     }
    // }),
    (req, res) => {
        StudentModel.getOne(req.params, res.callback)
    }
)
router.get("/", (req, res) => {
    StudentModel.search(res.callback)
})
export default router
