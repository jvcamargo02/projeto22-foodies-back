import { Router } from "express";
import authRoute from "./authRouter";
import categoryRoute from "./categories";
import restaurantRoute from "./restaurantRouter";

const router = Router();

router.use(authRoute);
router.use(categoryRoute)
router.use(restaurantRoute)

export default router;
