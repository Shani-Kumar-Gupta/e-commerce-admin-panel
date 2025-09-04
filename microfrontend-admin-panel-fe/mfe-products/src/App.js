import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductCreation from './Components/ProductCreation';

const App = () => (
  <div className="App">
    <h1>Products Management</h1>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/products" style={{ marginRight: 20, color: '#61dafb' }}>Product List</Link>
      <Link to="/products/create" style={{ color: '#61dafb' }}>Add Product</Link>
    </nav>
    <Routes>
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/create" element={<ProductCreation />} />
    </Routes>
  </div>
);

export default App;
