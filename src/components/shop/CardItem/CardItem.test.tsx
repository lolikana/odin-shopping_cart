import '@testing-library/jest-dom'; // Import the jest-dom matchers

import renderWithRouter from '@__tests__/renderWithRouter';
import { store } from '@store/store.ts';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IProduct } from 'utils/types';

import CardItem from './CardItem';

const mockItem = {
  id: 1,
  category: 'hiking',
  name: 'Shoes',
  price: 499.99,
  stock: 5,
  technology: 'gore-tex' as const,
  imagePath: '/path/to/image.jpg'
};

describe('CardItem component', () => {
  const renderCardItem = (product: IProduct) =>
    renderWithRouter(
      <Provider store={store}>
        <CardItem item={product} />
      </Provider>
    );

  it('should render the card item with correct details', () => {
    renderCardItem(mockItem);

    const image = screen.getByRole('img');
    const title = screen.getByText(/SHOES/i);
    const technology = screen.getByText(/gore-tex/i); // Use a regular expression to match "gore-tex" case-insensitively
    const price = screen.getByText('$499.99');
    const category = screen.getByText(/hiking/i);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/path/to/image.jpg');
    expect(title).toBeInTheDocument();
    expect(technology).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  test('renders SOLD OUT when product stock is 0', () => {
    renderCardItem({ ...mockItem, stock: 0 });
    const soldOutText = screen.getByText(/SOLD OUT/i);
    expect(soldOutText).toBeInTheDocument();
  });
});
