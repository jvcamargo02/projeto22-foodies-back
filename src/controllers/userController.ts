import { Request, Response } from "express";

import * as userServices from "../services/userServices";
import { UserRequest } from "../types/userTypes";

export async function signup(req: Request, res: Response) {
    const { email, password, name, cep, address, number, city, state } = req.body as UserRequest;

    await userServices.create({ email, password, name, cep, address, number, city, state, isMain: true });

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await userServices.signin({ email, password });

    res.status(200).send(token)
}