import React from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductCreation from './Components/ProductCreation';

export const ProductsComponent = () => {
  // determine path relative to Angular route
  const initialPath = window.location.pathname.endsWith('/create') ? '/create' : '/';

  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <div>
        <h1>Products Management</h1>
        <nav>
          <Link to="/">Product List</Link>
          <Link to="/create">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/create" element={<ProductCreation />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
};
