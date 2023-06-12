import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

import Burger from './Burger';

describe('Burger component', () => {
  const mockFn = vi.fn();
  it('should render with initial state', () => {
    render(<Burger setNavMenu={mockFn} />);
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });

  it('should toggle expanded state on click', async () => {
    const user = userEvent.setup();
    render(<Burger setNavMenu={mockFn} />);
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'true');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });
});
