import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Banana", "Apples"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearItem } = cartSlice.actions;
