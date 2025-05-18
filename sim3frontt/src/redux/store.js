import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice.js"; 
import basketSlice from './reducer/basketSlice.js'
import wishlistSlice from './reducer/wishlistSlice.js'
export const store = configureStore({
  reducer: {
    product: productSlice,
      basket: basketSlice,
        wishlist:wishlistSlice
  },
});
