import prisma from "../config/database";


export async function findAll(location?:string) {
    
    if (location && location !== "undefined") {
        return await prisma.$queryRaw`SELECT c.id, c.name, c.image FROM categories c JOIN restaurants r ON r."typeId" = c.id WHERE r.city = ${location} GROUP BY (c.name, c.id)`
    }

    return await prisma.$queryRaw`SELECT c.id, c.name, c.image FROM categories c JOIN restaurants r ON r."typeId" = c.id GROUP BY (c.name, c.id)`
    
}

/* select c.id, c.name, c.image from categories c join restaurants r on r."typeId" = c.id group by (c.name, c.id) */