

export interface IRestaurant {
    id: number;
    name: string;
    image: string;
    typeId: number;
    type: IType;
    city: string;
    state: string;
    closeHour: string;
    openingHour: string;
}

interface IType {
    name: string;
}
