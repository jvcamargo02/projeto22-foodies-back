import prisma from "../config/database";
import { IAddress } from "../types/addressTypes";


export async function create(addressData: IAddress) {
    const {cep, address, number, city, state, userId, isMain} = addressData

    return await prisma.usersAddresses.create({
        data: {
            cep,
            adress: address,
            number,
            city,
            state,
            isMain,
            userId
        }
    })
}

