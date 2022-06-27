import { Router } from "express";

const router = Router();

//========================================== RUTAS PUBLICAS ===============================================

//Vista de Home
router.get("/", (req, res) => {
  res.render("home");
});

export default router;
