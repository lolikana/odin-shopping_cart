import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct } from 'utils/types';

import { RootState } from '../store';

export interface ICartState {
  cartItems: ICartItem[];
}

const initialState: ICartState = {
  cartItems: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Find the cart item with the matching product ID
    increment: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (el: ICartItem) => el.product.id === action.payload.id
      );

      if (item) item.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1
        });
      }
    },

    // Reducer for decrementing the quantity of a product in the cart
    decrement: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (el: ICartItem) => el.product.id === action.payload.id
      );

      if (item) {
        item.qty--;
        if (item.qty === 0) {
          // If the quantity reaches 0, remove the item from the cart
          state.cartItems = state.cartItems.filter(
            el => el.product.id !== action.payload.id
          );
        }
      }
    }
  }
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemSelector = createSelector(
  [cartItems],
  (cartItems: ICartItem[]) =>
    cartItems.reduce((total: number, curr: ICartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems: ICartItem[]) =>
  cartItems.reduce(
    (total: number, curr: ICartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const productQtySelector = createSelector(
  //allow passing additional arguments to the selector, here productId
  [cartItems, (_cartItems, productId: number) => productId],
  (cartItems, productId: number) => cartItems.find(el => el.product.id === productId)?.qty
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
