import { Request, Response } from "express";

import * as restaurantServices from "../services/restaurantServices";

export async function findAll(req: Request, res: Response) {
    const { location, _limit, _page } = req.query as { location?: string, _limit?: string, _page?: string}
    const restaurants = await restaurantServices.findAll(location, _limit, _page);

    console.log(restaurants)
    res.setHeader("x-total-count", +restaurants.total)
    res.status(200).send(restaurants.isOpensRestaurants);
}