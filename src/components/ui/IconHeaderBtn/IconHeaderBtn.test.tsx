import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import IconHeaderBtn from './IconHeaderBtn';

describe('IconHeaderBtn.tsx', () => {
  const mockProps = {
    src: '/path/to/image.png',
    alt: 'Image',
    onClick: vi.fn()
  };

  it('renders the component without errors', () => {
    render(<IconHeaderBtn {...mockProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should pass the correct props', () => {
    render(<IconHeaderBtn {...mockProps} />);
    const image: HTMLImageElement = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/path/to/image.png');
    expect(image).toHaveAttribute('alt', `Image icon`);
  });

  it('responds to user interactions', async () => {
    const user = userEvent.setup();
    render(<IconHeaderBtn {...mockProps} />);
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
