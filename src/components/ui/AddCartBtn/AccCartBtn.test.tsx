import renderWithRouter from '@__tests__/renderWithRouter';
import { store } from '@store/store.ts';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { IProduct } from 'utils/types';

import AddCartBtn from './AddCartBtn';

const mockProduct: IProduct = {
  id: 1,
  category: 'hiking',
  name: 'Shoes',
  price: 499.99,
  stock: 5,
  technology: 'gore-tex' as const,
  imagePath: '/path/to/image.jpg'
};

describe('AddCartBtn', () => {
  const renderAddCartBtn = (product: IProduct) =>
    renderWithRouter(
      <Provider store={store}>
        <AddCartBtn product={product} />
      </Provider>
    );
  test('renders Add To Cart button when product is not in the cart', () => {
    renderAddCartBtn(mockProduct);

    const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    expect(addToCartBtn).toBeInTheDocument();
  });

  test('renders QtyBtn when product is added to the cart', async () => {
    const user = userEvent.setup();
    renderAddCartBtn(mockProduct);

    const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    await user.click(addToCartBtn);

    const qtyBtnIncrease: HTMLButtonElement = await screen.findByTestId('increase-btn');
    const qtyBtnDecrease: HTMLButtonElement = await screen.findByTestId('decrease-btn');

    expect(qtyBtnIncrease).toBeInTheDocument();
    expect(qtyBtnDecrease).toBeInTheDocument();
  });
});
