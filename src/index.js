import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from './customer';
import Apps from './App'


const router = createBrowserRouter([
  {
    path:"/customer",
    element: <Customer/>
  },
  {
    path:"/App",
    element: <Apps/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
