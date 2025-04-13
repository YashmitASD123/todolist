import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all todos" });
});

export default router;