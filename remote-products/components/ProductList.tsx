// components/ProductList.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

interface ProductListProps {
  // Function to be called when a product is selected (provided by the host)
  onSelectProduct?: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get(`${process.env.API_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Remote Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <img src={product.image} alt={product.title} width="50" style={{ marginRight: '0.5rem' }} />
            <span>{product.title} - ${product.price}</span>
            {onSelectProduct && (
              <button style={{ marginLeft: '1rem' }} onClick={() => onSelectProduct(product)}>
                Select
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
