import { Router } from "express";

import { findAll, findById } from "../controllers/restaurantController";

const restaurantRoute = Router();

restaurantRoute.get("/restaurants", findAll);
restaurantRoute.get("/restaurants/:id", findById);

export default restaurantRoute