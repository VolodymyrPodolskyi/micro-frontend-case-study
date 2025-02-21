export class BasketCalculator {
  static calculateTotals(items: BasketItem[]) {
    return items.reduce(
      (acc, item) => {
        acc.totalAmount += item.price * item.quantity;
        acc.totalQuantity += item.quantity;
        return acc;
      },
      { totalAmount: 0, totalQuantity: 0 }
    );
  }
} 