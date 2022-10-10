import { Router } from "express";

import { findAll } from "../controllers/categoriesController";

const categoryRoute = Router();

categoryRoute.get("/categories", findAll);

export default categoryRoute