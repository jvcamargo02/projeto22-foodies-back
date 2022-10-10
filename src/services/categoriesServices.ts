
import * as categoriesRepositories from "../repositories/categoriesRepositories";

export async function findAll(location?:string | undefined) {
    return await categoriesRepositories.findAll(location)
}