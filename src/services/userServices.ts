import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User, UserRequest, UserLoginData } from "../types/userTypes";
import * as userRepositories from "../repositories/userRepository";
import * as addressServices from "./addressServices"

export async function create(userData: UserRequest) {
    const { email, password, name, cep, address, number, city, state, isMain } = userData;

    await validNewUser(email);
    const hashedPassword: string = await hashPassword(password);
    const id = await userRepositories.create({ email, password: hashedPassword, name });

    return await addressServices.create({cep, address, number, city, state, isMain, userId: id})
}

export async function signin(loginData: UserLoginData) {
    const { email, password } = loginData;

    const user = await isValidEmail(email);
    isValidPassword(password, user.password);

    return generateToken(user.id);
}

async function validNewUser(email: string) {
    const user = await userRepositories.findUserByEmail(email);

    if (user) throw { type: "conflict", message: "E-mail already registered" };

    return;
}

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    return await bcrypt.hash(password, salt);
}

async function isValidEmail(email: string): Promise<User> {
    const user = await userRepositories.findUserByEmail(email);

    if (!user) throw { type: "not_found", message: "Incorrect email or password" };

    return user;
}


function isValidPassword(password: string, hashedPassword: string) {
    const verify = bcrypt.compareSync(password, hashedPassword);

    if (!verify) throw { type: "unauthorized", message: "Incorrect email or password" };
}

function generateToken(userId: number) {
    const SECRET: string = process.env.JWT_SECRET || "secret"
    return jwt.sign({ userId }, SECRET);
}