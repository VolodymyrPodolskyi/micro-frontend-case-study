import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

// Import API slices
import { shopAPI } from "../api/shopAPISlice";
import { basketAPI } from "../api/basketAPISlice";
import shopReducer from "@/redux/features/shopSlice";
import basketReducer from "@/redux/features/basketSlice";
import { productsApi } from '../api/productsAPISlice';

// Root reducer with RTK Query endpoints
const reducers = combineReducers({
  [shopAPI.reducerPath]: shopAPI.reducer,
  [basketAPI.reducerPath]: basketAPI.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  shop: shopReducer,
  basket: basketReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket'], // Only persist basket state
  blacklist: [shopAPI.reducerPath, basketAPI.reducerPath], // Don't persist API states
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Custom reducer to handle rehydration
const reducer = (state: any, action: any) => {
  if (action.type === REHYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return persistedReducer(state, action);
};

// Configure store with middleware
const makeConfiguredStore = (reducer: any) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(
        shopAPI.middleware,
        basketAPI.middleware,
        productsApi.middleware
      ),
    devTools: process.env.NODE_ENV !== "production",
  });

// Store creator function handling SSR
export const makeStore = () => {
  const isServer = typeof window === "undefined";
  
  // Ensure clean state for each request in SSR
  if (isServer) {
    return makeConfiguredStore(reducers);
  }
  
  // Client-side state with persistence
  const store = makeConfiguredStore(reducer);
  store.dispatch({ type: REHYDRATE });
  return store;
};

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, { 
  debug: process.env.NODE_ENV !== "production" 
});
