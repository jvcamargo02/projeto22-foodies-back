import { Request, Response } from "express";

import * as categoriesServices from "../services/categoriesServices";

export async function findAll(req: Request, res: Response) {
    const { location } = req.query as { location?: string}
    const categories = await categoriesServices.findAll(location);

    res.status(200).send(categories);
}