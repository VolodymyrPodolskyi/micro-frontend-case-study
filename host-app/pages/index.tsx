// pages/index.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// Dynamically import remote components using Module Federation.
// The import paths must match the exposed modules in the remote apps.
const RemoteProductList = dynamic(() => import('productsRemote/ProductList'), { ssr: false });
const RemoteBasket = dynamic(() => import('basketRemote/RemoteBasket'), { ssr: false });

const Home: NextPage = () => {
  // State to hold selected products from the product list.
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  // Callback to handle product selection.
  const handleSelectProduct = (product: any) => {
    setSelectedProducts(prev => [...prev, product]);
  };

  return (
    <div>
      <Head>
        <title>Host Application</title>
      </Head>
      <main>
        <h1>Product List</h1>
        {/* The remote ProductList component should accept an onSelectProduct prop */}
        <RemoteProductList onSelectProduct={handleSelectProduct} />

        <h2>Your Basket</h2>
        {/* Pass the selected products to the remote basket component */}
        <RemoteBasket selectedProducts={selectedProducts} />
      </main>
    </div>
  );
};

export default Home;
