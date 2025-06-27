export interface IProducts {
    _id:         string;
    name:        string;
    description: string;
    price:       number;
    category:    Category;
    image:       string;
    active:      boolean;
}

export enum Category {
    Hombre = "hombre",
    Mujer = "mujer",
    Niño = "niño",
}
