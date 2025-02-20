// src/components/RemoteBasket.js
import React from 'react';

const RemoteBasket = ({ selectedProducts }) => {
  return (
    <div>
      <h2>Your Basket</h2>
      {selectedProducts && selectedProducts.length > 0 ? (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: '1rem' }}>
              <img src={product.image} alt={product.title} width="50" style={{ marginRight: '0.5rem' }} />
              <span>{product.title} - ${product.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
};

export default RemoteBasket;
