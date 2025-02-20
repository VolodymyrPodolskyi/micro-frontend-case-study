// src/App.js
import React from 'react';
import RemoteBasket from './components/RemoteBasket';

const sampleProducts = [
  { id: 1, title: 'Product 1', price: 10, image: 'https://via.placeholder.com/50' },
  { id: 2, title: 'Product 2', price: 20, image: 'https://via.placeholder.com/50' }
];

function App() {
  return (
    <div>
      <h1>Basket Remote - Local Testing</h1>
      <RemoteBasket selectedProducts={sampleProducts} />
    </div>
  );
}

export default App;
