import renderWithRouter from '@__tests__/renderWithRouter';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';

import Burger from './Burger';

describe('Burger component', () => {
  const mockFn = vi.fn();
  it('should render with initial state', () => {
    render(
      <MemoryRouter>
        <Burger setNavMenu={mockFn} />
      </MemoryRouter>
    );
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });

  it('should toggle expanded state on click', async () => {
    const { user } = renderWithRouter(<Burger setNavMenu={mockFn} />);
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'true');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });
});
