export interface IProductCat {
  id: 'hiking123' | 'running123' | 'trail123';
  type: string;
}

export interface IProduct {
  id: number;
  category: IProductCat['id'];
  name: string;
  technology?: 'gore-tex';
  price: number;
  imagePath: string;
}
export interface ICartItem {
  product: IProduct;
  qty: number;
}
