import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

class ProductsElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);
    const initialPath = this.getAttribute('initialPath') || '/';
    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <MemoryRouter initialEntries={[initialPath]}>
        <App />
      </MemoryRouter>
    );
  }
  disconnectedCallback() {
    this.innerHTML = '';
  }
}

customElements.define('products-element', ProductsElement);
