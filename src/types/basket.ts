export interface BasketItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface BasketItemDisplay extends BasketItem {
  name: string;
  image?: string;
}

export interface BasketOperations {
  addItem(item: BasketItem): void;
  removeItem(id: number): void;
  updateQuantity(id: number, quantity: number): void;
}

export interface BasketCalculations {
  calculateTotal(): number;
  calculateQuantity(): number;
} 