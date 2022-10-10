import { Router } from "express";
import authRoute from "./authRouter";
import categoryRoute from "./categories";

const router = Router();

router.use(authRoute);
router.use(categoryRoute)

export default router;
