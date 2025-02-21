import { RootState } from "@/redux/host-app";
import { createSlice } from "@reduxjs/toolkit";
import { shopAPI } from "../api/shopAPISlice";
import { Shop } from "@/types";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: null as any,
    cart: [] as Shop.AddToCartReq[],
    wishlist: [] as Shop.AddToCartReq[],
    showCart: false as boolean,
    showWishlist: false as boolean,
    categories: null as null | string[],
    activeCategory: "" as string,
    activeSortQuery: "" as string,
  },
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setShowWishlist: (state) => {
      state.showWishlist = !state.showWishlist;
    },
    closeCart: (state) => {
      state.showCart = false;
    },
    closeWishlist: (state) => {
      state.showWishlist = false;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveSortQuery: (state, action) => {
      state.activeSortQuery = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    removeFromCart: (state, action) => {
      let items = state.cart;
      let filteredItems = items.filter(
        (item) => item.productId !== action.payload
      );
      state.cart = filteredItems;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    removeFromWishlist: (state, action) => {
      let items = state.wishlist;
      let filteredItems = items.filter(
        (item) => item.productId !== action.payload
      );
      state.wishlist = filteredItems;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      shopAPI.endpoints.listProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload; // Assuming action.payload contains the list of jobs
      }
    ),
      builder.addMatcher(
        shopAPI.endpoints.listCategories.matchFulfilled,
        (state, action) => {
          state.categories = action.payload; // Assuming action.payload contains the list of jobs
        }
      );
  },
});

export const {
  setShowCart,
  setShowWishlist,
  setCategories,
  setActiveCategory,
  setActiveSortQuery,
  setCart,
  removeFromCart,
  setWishlist,
  removeFromWishlist,
  closeCart,
  closeWishlist,
} = shopSlice.actions;

export const selectShop = (state: RootState) => state.shop;

export default shopSlice.reducer;
