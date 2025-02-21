import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export interface BasketItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
}

export const basketAPI = createApi({
  reducerPath: 'basketAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_BASKET_API_URL 
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Basket'],
  endpoints: (builder) => ({
    getBasketItems: builder.query<BasketItem[], void>({
      query: () => 'basket',
      providesTags: ['Basket'],
    }),
    addToBasket: builder.mutation<BasketItem, Partial<BasketItem>>({
      query: (item) => ({
        url: 'basket',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Basket'],
    }),
    updateBasketItem: builder.mutation<BasketItem, Partial<BasketItem>>({
      query: (item) => ({
        url: `basket/${item.id}`,
        method: 'PATCH',
        body: item,
      }),
      invalidatesTags: ['Basket'],
    }),
    removeFromBasket: builder.mutation<void, number>({
      query: (id) => ({
        url: `basket/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Basket'],
    }),
  }),
});

export const {
  useGetBasketItemsQuery,
  useAddToBasketMutation,
  useUpdateBasketItemMutation,
  useRemoveFromBasketMutation,
} = basketAPI; 