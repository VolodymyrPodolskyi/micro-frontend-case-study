const { data, error, isLoading } = useGetProductsQuery({
  limit: 10,
  sort: 'desc'
}, {
  pollingInterval: 30000,
  skip: !isOnline
}); 