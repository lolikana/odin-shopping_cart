import renderWithRouter from '@__tests__/renderWithRouter';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IProductCat } from 'utils/types';
import { vitest } from 'vitest';

import NavCategory from './NavCategory';

const mockCategories: IProductCat[] = [
  { id: 'all123', type: 'all' },
  { id: 'hiking123', type: 'hiking' },
  { id: 'running123', type: 'running' },
  { id: 'trail123', type: 'trail' }
];
const mockSetCategory = vitest.fn(); // Create a mock function

describe('NavCategory component', () => {
  it('should render the category buttons', () => {
    render(
      <BrowserRouter>
        <NavCategory categories={mockCategories} setCategory={() => {}} />
      </BrowserRouter>
    );
    const categoryButtons = screen.getAllByTestId('navigation-category');

    expect(categoryButtons).toHaveLength(mockCategories.length);
    expect(categoryButtons[0]).toHaveTextContent('all');
    expect(categoryButtons[1]).toHaveTextContent('hiking');
    expect(categoryButtons[2]).toHaveTextContent('running');
    expect(categoryButtons[3]).toHaveTextContent('trail');
  });

  it('should show the navigation menu when "show categories" btn clicked', async () => {
    const { user } = renderWithRouter(
      <NavCategory categories={mockCategories} setCategory={mockSetCategory} />
    );
    const showCatBtn: HTMLButtonElement = screen.getByRole('button', {
      name: /Show Categories/i
    });
    const hideCatBtn: HTMLButtonElement = screen.getByTestId('hide-cat-btn');
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'false');
    expect(hideCatBtn).toHaveAttribute('aria-disabled', 'true');
    await user.click(showCatBtn);
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'true');
    expect(hideCatBtn).toHaveAttribute('aria-disabled', 'false');
  });

  it('should hide the navigation menu when clicked outside', async () => {
    const { user } = renderWithRouter(
      <NavCategory categories={[]} setCategory={mockSetCategory} />
    );

    const showCatBtn = screen.getByRole('button', { name: /Show Categories/i });
    const hideCatBtn = screen.getByTestId('hide-cat-btn');

    await user.click(showCatBtn); // Show the navigation menu
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'true');

    await user.click(document.body); // Click outside the navRef element
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'false');
  });

  it('should not hide the navigation menu when clicked inside', async () => {
    const { user } = renderWithRouter(
      <NavCategory categories={[]} setCategory={mockSetCategory} />
    );

    const showCatBtn = screen.getByRole('button', { name: /Show Categories/i });
    const hideCatBtn = screen.getByTestId('hide-cat-btn');
    const nav = screen.getByTestId('nav-categories');

    await user.click(showCatBtn); // Show the navigation menu
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'true');

    await user.click(nav); // Click outside the navRef element
    expect(hideCatBtn).toHaveAttribute('aria-hidden', 'true');
  });
});
