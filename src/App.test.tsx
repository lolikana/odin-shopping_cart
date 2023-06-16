import renderWithRouter from '@__tests__/renderWithRouter';
import { store } from '@store/store';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';

import App from './App';

describe('App.tsx', () => {
  describe('Header.tsx', () => {
    it('renders the Header component', () => {
      renderWithRouter(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const headerElement = screen.getByTestId('header-component');

      expect(headerElement).toBeInTheDocument();
    });

    it('should renders Header with the correct image source', () => {
      renderWithRouter(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const image: HTMLImageElement = screen.getByAltText(/Salomon logo/i);
      const expectedSrcRegex = '/src/assets/logo/logo-salomon-2022-black.svg';

      expect(image).toHaveAttribute('src', expectedSrcRegex);
    });
  });
});
