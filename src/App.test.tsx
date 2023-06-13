import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import App from './App';

describe('App.tsx', () => {
  describe('Header.tsx', () => {
    it('renders the Header component', () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const headerElement = screen.getByTestId('header-component');

      expect(headerElement).toBeInTheDocument();
    });

    it('should renders Header with the correct image source', () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const image: HTMLImageElement = screen.getByAltText(/Salomon logo/i);
      const expectedSrcRegex = '/src/assets/logo/logo-salomon-2022-black.svg';

      expect(image).toHaveAttribute('src', expectedSrcRegex);
    });
  });
});
