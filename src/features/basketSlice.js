import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};

const bascketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.price += action.payload;
    },
    decrement: (state, action) => {
      state.price -= action.payload;
    },
  },
});

export const { increment, decrement } = bascketSlice.actions;

export default bascketSlice.reducer;
