export interface User {
    id: number;
    name: string
    email: string;
    password: string;
}

export interface UserRequest {
    email: string;
    password: string;
    name: string;
    cep: string;
    address: string;
    number: string;
    city: string;
    state: string
    isMain: boolean
}

export type UserLoginData = Omit<User, "id" | "name">

export type UserData = Omit<User, "id">;