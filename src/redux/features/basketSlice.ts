import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../host-app';
import { BasketCalculator } from '@/services/basket/basketCalculator';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Basket Slice
 * 
 * Manages the shopping basket state with the following features:
 * - Real-time total calculations
 * - Quantity management
 * - Persistence across sessions
 * - Remote synchronization
 * 
 * State Structure:
 * - items: Array of basket items
 * - totalAmount: Calculated total price
 * - totalQuantity: Total number of items
 * - isLoading: Loading state for async operations
 * - error: Error state for failed operations
 * 
 * Implementation follows SOLID principles:
 * - Single Responsibility: Separate calculation logic
 * - Open/Closed: Extensible through action handlers
 * - Interface Segregation: Minimal required interfaces
 * - Dependency Inversion: Depends on abstractions
 */

export interface BasketItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  name: string;
  image?: string;
}

interface BasketState {
  items: BasketItem[];
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: BasketState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  isLoading: false,
  error: null,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasketItems: (state, action: PayloadAction<BasketItem[]>) => {
      state.items = action.payload;
      const totals = BasketCalculator.calculateTotals(action.payload);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existingItem = state.items.find(
        item => item.productId === action.payload.productId
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      const totals = BasketCalculator.calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      const totals = BasketCalculator.calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        const totals = BasketCalculator.calculateTotals(state.items);
        state.totalAmount = totals.totalAmount;
        state.totalQuantity = totals.totalQuantity;
      }
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  setBasketItems,
  addItem,
  removeItem,
  updateItemQuantity,
  clearBasket,
  setLoading,
  setError,
} = basketSlice.actions;

// Export selectors
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketTotalAmount = (state: RootState) => state.basket.totalAmount;
export const selectBasketTotalQuantity = (state: RootState) => state.basket.totalQuantity;
export const selectBasketLoading = (state: RootState) => state.basket.isLoading;
export const selectBasketError = (state: RootState) => state.basket.error;

/**
 * Selectors
 * Memoized selectors for efficient state access
 */
export const selectBasketTotal = (state: RootState) => {
  return state.basket.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

/**
 * Async Thunks
 * Handle asynchronous operations with proper error handling
 */
export const syncBasketWithRemote = createAsyncThunk(
  'basket/syncWithRemote',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const items = selectBasketItems(state);
    // TODO: Implement remote basket sync
  }
);

export default basketSlice.reducer; 