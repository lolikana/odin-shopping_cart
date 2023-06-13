import renderWithRouter from '@__tests__/renderWithRouter';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Navbar from './Navbar';

describe('Navbar.tsx', () => {
  it('should renders the burger icon', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const burger = screen.getByTestId('burger');
    expect(burger).toBeInTheDocument();
  });

  it('should renders the nav menu and set aria-hidden to false when click burger', async () => {
    const { user } = renderWithRouter(<Navbar />, { route: '/' });

    const menu: HTMLUListElement = screen.getByTestId('navmenu');
    const burger = screen.getByTestId('burger');
    expect(menu).toHaveAttribute('aria-hidden', 'true');

    await user.click(burger);
    expect(menu).toHaveAttribute('aria-hidden', 'false');
  });
});
