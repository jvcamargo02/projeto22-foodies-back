import prisma from "../src/config/database";

async function main() {
    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE "restaurants" RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE "menu" RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE "menuItem" RESTART IDENTITY CASCADE`,
    ]);

    await prisma.categories.createMany({
        data: [
            {
                name: "Coffee Shop",
                image: "https://aux.iconspalace.com/uploads/coffee-icon-256.png",
            },
            {
                name: "Brazilian Food",
                image: "http://cdn.onlinewebfonts.com/svg/img_415179.png",
            },
            {
                name: "Fast-Food",
                image: "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-icon.png",
            },
        ],
    });

    await prisma.restaurants.createMany({
        data: [
            {
                name: "Terraço Mineiro1",
                image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0d838aa1-5c6f-4c98-b83f-c1fc5d69dfc5/202103271542_y6nN_i.png",
                typeId: 2,
                city: "São Paulo",
                state: "SP",
                closeHour: "17:00",
                openingHour: "10:30",
            },
            {
                name: "Terraço Mineiro2",
                image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0d838aa1-5c6f-4c98-b83f-c1fc5d69dfc5/202103271542_y6nN_i.png",
                typeId: 2,
                city: "São Paulo",
                state: "SP",
                closeHour: "17:00",
                openingHour: "10:30",
            },
            {
                name: "Terraço Mineiro3",
                image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0d838aa1-5c6f-4c98-b83f-c1fc5d69dfc5/202103271542_y6nN_i.png",
                typeId: 2,
                city: "São Paulo",
                state: "SP",
                closeHour: "17:00",
                openingHour: "10:30",
            },
        ],
    });

    await prisma.menu.createMany({
        data: [
            {
                restaurantId: 1,
                backgroundColor: "#E4D5D3",
            },
        ],
    });

    await prisma.menuItem.createMany({
        data: [
            {
                menuId: 1,
                name: "Parmegiana de Frango1",
                image: "https://iili.io/Q4vtgs.png",
                description:
                    "Delicioso filé de carne ou de frango, frito com farinha panko e coberto com nosso molho artesanal e parmesão, acompanhado de arroz e uma variação de batata.",
                price: "29.90",
            },
            {
                menuId: 1,
                name: "Filé de peixe empanado",
                image: "https://iili.io/Q4vZ1n.png",
                description:
                    "Delicioso filé de carne ou de frango, frito com farinha panko e coberto com nosso molho artesanal e parmesão, acompanhado de arroz e uma variação de batata.",
                price: "29.90",
            },
            {
                menuId: 1,
                name: "Parmegiana de Frango1",
                image: "https://iili.io/Q4vtgs.png",
                description:
                    "Delicioso filé de carne ou de frango, frito com farinha panko e coberto com nosso molho artesanal e parmesão, acompanhado de arroz e uma variação de batata.",
                price: "29.90",
            },
        ],
    });
}


main()
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());