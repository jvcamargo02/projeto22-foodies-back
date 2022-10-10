import { Router } from "express";

import { signup, signin } from "../controllers/userController";
import { validateSchema } from "../middlewares/validateSchema";
import { loginSchema, userSchema } from "../schemas/userSchema";

const authRoute = Router();

authRoute.post("/signup", validateSchema(userSchema), signup);

authRoute.post("/signin", validateSchema(loginSchema), signin);

export default authRoute;
