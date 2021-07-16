 export interface PizzaInterface {
    id?: number;
    imageUrl: string;
    name: string;
    types?:   Array<number> | null;
    sizes?: (number)[] | null;
    price: number;
    category: number;
    rating?: number;
  }