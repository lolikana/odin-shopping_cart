import '@styles/main.scss';

import ShopPages from '@pages/Shop.tsx';
import { store } from '@store/store.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Store } from 'redux';

import App from './App.tsx';
import CartPage from './pages/Cart.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/shop', element: <ShopPages /> },
  { path: '/cart', element: <CartPage /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store as Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
