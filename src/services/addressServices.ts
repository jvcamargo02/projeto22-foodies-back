
import * as userAddressRepository from "../repositories/userAddressRepostories"
import { IAddress } from "../types/addressTypes";

export async function create(addressData: IAddress) {
    const { cep, address, number, city, state, userId, isMain } = addressData;

    return await userAddressRepository.create({ cep, address, number, city, state, userId, isMain });
}