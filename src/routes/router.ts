import { Router } from "express"
import { LeadsController } from "../controllers/leadsController"

const router = Router()

const leadsController = new LeadsController()

router.get("/leads",LeadsController.index)
router.post("/leads",LeadsController.create)
router.get("/leads/:id",LeadsController.show)



router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "OK" })
  } catch (error) {
    next(error)
  }
})

export { router }
