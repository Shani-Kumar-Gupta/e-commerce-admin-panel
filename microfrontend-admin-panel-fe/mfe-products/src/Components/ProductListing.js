import React from 'react';

const products = [
  { name: 'iPhone 15 Pro', price: 999 },
  { name: 'MacBook Air M2', price: 1199 },
  { name: 'Apple Watch Series 9', price: 399 },
  { name: 'AirPods Pro', price: 249 },
];

export default function ProductListing() {
  return (
    <div>
      <h2>Product List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p, i) => (
          <li key={i} style={{ padding: '10px', margin: '5px 0', background: '#f0f0f0', borderRadius: '5px' }}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}