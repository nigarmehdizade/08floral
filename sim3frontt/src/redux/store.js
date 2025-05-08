import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice.js"; 

export const store = configureStore({
  reducer: {
    product: productSlice
  },
});
