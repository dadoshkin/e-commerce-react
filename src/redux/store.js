import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import cartReducer from "../redux/products/cartSlice"
import { productsApi } from "./products/productsApi";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
