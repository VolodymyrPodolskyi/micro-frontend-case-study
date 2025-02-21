'use client'

import { useGetProductsQuery } from '@/redux/api/productsAPISlice';
import { ProductCard } from './ProductCard';
import { useToast } from '@/hooks/use-toast';

/**
 * ProductList Component
 * 
 * A responsive grid layout for displaying products fetched using RTK Query.
 * Implements progressive enhancement with responsive breakpoints:
 * - Mobile: Single column (< 768px)
 * - Tablet: Two columns (≥ 768px)
 * - Desktop: Three columns (≥ 1024px)
 * 
 * Uses RTK Query for:
 * - Automatic caching
 * - Loading states
 * - Error handling
 */
export const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const { toast } = useToast();

  if (isLoading) return <div>Loading products...</div>;
  
  if (error) {
    toast({
      title: 'Error',
      description: 'Failed to load products',
      variant: 'destructive',
    });
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}; 