import { Router } from "express";

import { findAll } from "../controllers/restaurantController";

const restaurantRoute = Router();

restaurantRoute.get("/restaurants", findAll);

export default restaurantRoute