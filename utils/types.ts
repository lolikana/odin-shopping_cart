export interface IProduct {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}
export interface ICartItem {
  product: IProduct;
  qty: number;
}
