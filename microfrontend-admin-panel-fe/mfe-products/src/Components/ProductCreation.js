import React, { useState } from 'react';

export default function ProductCreation() {
  const [form, setForm] = useState({ name: '', price: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Product "${form.name}" with price $${form.price} created!`);
    setForm({ name: '', price: '' });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginBottom: 10, width: '100%', padding: 8 }}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          style={{ marginBottom: 10, width: '100%', padding: 8 }}
        />
        <button type="submit" style={{ padding: 10, width: '100%' }}>Create</button>
      </form>
    </div>
  );
}