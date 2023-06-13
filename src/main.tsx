import '@/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/shop', element: <h1>SHOP</h1> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
