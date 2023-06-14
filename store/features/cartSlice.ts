import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct } from 'utils/types';

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
    increment: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(el => el.product.id === action.payload.id);

      if (item) item.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1
        });
      }
    },

    decrement: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(el => el.product.id === action.payload.id);

      if (item) {
        item.qty--;
        if (item.qty === 0) {
          state.cartItems = state.cartItems.filter(
            el => el.product.id !== action.payload.id
          );
        }
      }
    }
  }
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
