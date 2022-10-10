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
    Menu: IMenu;
}

interface IType {
    name: string;
}

interface IMenu {
    backgroundColor: string;
    MenuItems: IMenuItems[];
}

interface IMenuItems {
    description: string;
    id: number;
    image: string;
    menuId: number;
    name: string;
    price: string;
}
