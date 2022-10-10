import joi from "joi";

export const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    name: joi.string().required(),
    cep: joi.string().regex(/\d{5}-?\d{3}/).required(),
    address: joi.string().required(),
    number: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    isMain: joi.boolean().required()
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});