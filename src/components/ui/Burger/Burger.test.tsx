import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';

import Burger from './Burger';

describe('Burger component', () => {
  it('should render with initial state', () => {
    render(<Burger />);
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });

  it('should toggle expanded state on click', async () => {
    const user = userEvent.setup();
    render(<Burger />);
    const buttonElement: HTMLButtonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'true');
    await user.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });
});
