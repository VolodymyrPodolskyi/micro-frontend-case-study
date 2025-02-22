// Interface Segregation
interface ProductFetcher {
  fetchProducts(limit: number, sort: string): Promise<Product[]>;
}

interface ProductPersister {
  saveProduct(product: Product): Promise<void>;
}

// Dependency Inversion
class APIProductService implements ProductFetcher, ProductPersister {
  /* Concrete implementation */
} 