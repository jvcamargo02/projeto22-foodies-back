import dayjs from "dayjs";

import * as restaurantRepositories from "../repositories/restaurantRepositories";
import { IRestaurant } from "../types/restaurantType";

export async function findAll(location?: string | undefined, _limit?: string, _page?: string) {
    const {restaurants, total}: any = await restaurantRepositories.findAll(location, _limit, _page);

    const isOpensRestaurants = checkRestaurantIsOpen(restaurants);

    console.log(total)

    return {isOpensRestaurants, total};
}

function checkRestaurantIsOpen(restaurants: IRestaurant[]) {
    const result: any = []
    const reqTime = dayjs().format("HH:MM");
    restaurants.map((restaurant) => {
        if (restaurant.closeHour < reqTime || restaurant.openingHour > reqTime ) {
            result.push({...restaurant, isOpen: false}) 
        } else {
            result.push({...restaurant, isOpen: true}) 
        }

    });

    return result
}
