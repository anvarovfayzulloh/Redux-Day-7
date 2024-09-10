import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index === -1) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        state.products[index].quantity += 1;
      }
      localStorage.setItem("products", JSON.stringify(state.products))
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        if (state.products[index].quantity > 1) {
          state.products[index].quantity -= 1; 
        } else {
          state.products = state.products.filter(product => product.id !== action.payload.id);
        }
      }
      localStorage.setItem("products", JSON.stringify(state.products))
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;