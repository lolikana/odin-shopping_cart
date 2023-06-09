import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import IconBtn from './IconBtn';

describe('IconBtn.tsx', () => {
  const mockProps = {
    src: '/path/to/image.png',
    alt: 'Image',
    onClick: vi.fn()
  };

  it('renders the component without errors', () => {
    render(<IconBtn {...mockProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should pass the correct props', () => {
    render(<IconBtn {...mockProps} />);
    const image: HTMLImageElement = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/path/to/image.png');
    expect(image).toHaveAttribute('alt', `Image icon`);
  });

  it('responds to user interactions', async () => {
    const user = userEvent.setup();
    render(<IconBtn {...mockProps} />);
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
