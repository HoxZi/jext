import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from './customer';
import Apps from './App'
import Select_product from './select_product';


const router = createBrowserRouter([
  {
    path:"/customer",
    element: <Customer/>
  },
  {
    path:"/App",
    element: <Apps/>
  },
  {
    path:"/select_product",
    element: <Select_product/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
