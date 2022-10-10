import prisma from "../config/database";

export async function findAll(location?: string, _limit?: string, _page?: string) {
    let take: number | undefined = undefined
    let skip = 0;
    if (_limit && _page) {
        take = +_limit
        skip = (+_page - 1) * +_limit
    }

    const restaurants = await prisma.restaurants.findMany({
        where: {
            city: {
                contains: location,
                mode: "insensitive",
            },
        },
        select: {
            id: true,
            name: true,
            image: true,
            city: true,
            state: true,
            closeHour: true,
            openingHour: true,
            type: {
                select: {
                    name: true,
                },
            },
        },
        take: take,
        skip: skip
    });

    const total = await prisma.restaurants.count({
        where: {
            city: {
                contains: location,
                mode: "insensitive",
            },
        }
    })
    return {
        restaurants,
        total
    }
}

