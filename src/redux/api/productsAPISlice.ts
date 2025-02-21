import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config/environment';

/**
 * Product Interface
 * Defines the shape of product data received from the API
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

/**
 * Products API Slice
 * 
 * RTK Query implementation for product-related API endpoints.
 * Features:
 * - Automatic caching with tag-based invalidation
 * - Type-safe queries and mutations
 * - Automatic loading and error states
 * 
 * Cache invalidation strategy:
 * - Products are cached by their IDs
 * - List queries invalidate all product tags
 * - Individual queries only invalidate specific product tags
 */
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.api.baseUrl }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Products']
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Products', id }]
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi; 