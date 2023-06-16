import '@testing-library/jest-dom'; // Import the jest-dom matchers

import { render, screen } from '@testing-library/react';

import CardItem from './CardItem';

describe('CardItem component', () => {
  const mockItem = {
    id: 1,
    category: 'hiking',
    name: 'Shoes',
    price: 499.99,
    technology: 'gore-tex' as const,
    imagePath: '/path/to/image.jpg'
  };

  it('should render the card item with correct details', () => {
    render(<CardItem item={mockItem} />);

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
});
