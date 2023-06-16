export interface IProductCat {
  id: 'hiking123' | 'running123' | 'trail123';
  type: string;
}

export interface IProduct {
  id: number;
  category: IProductCat['type'];
  name: string;
  technology?: 'gore-tex';
  stock: number;
  price: number;
  imagePath: string;
}
export interface ICartItem {
  product: IProduct;
  qty: number;
}
