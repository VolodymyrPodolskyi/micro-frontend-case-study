export const productsApi = createApi({
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => `/products?${new URLSearchParams(params)}`,
      providesTags: ['Products']
    }),
  }),
});

// Automated revalidation example
export const { useGetProductsQuery } = productsApi; 