interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
}

interface IOrder {
    id: number;
    status: string;
    date: Date;
    user: IUser;
    products: IProduct[];
}

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
    category: ICategory;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];

    }

    enum eRole {
    ADMIN = "admin",
    USER = "user"
    }

type Params<T> = Promise<T>
type SearchParams<T> = Promise<T>;

// llevar al servicio de fetch cuando se implemente //
export interface CreateOrderDto { // POST
    userId: number
    products: number[]
}

export interface LoginUserDto { // POST
    email: string
    password: string
}

export interface RegisterUserDto { // POST
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}
