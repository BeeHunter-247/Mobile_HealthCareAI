import { createSlice } from "@reduxjs/toolkit";

// just a example
const prescriptionSlice = createSlice({
  name: "prescription",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = prescriptionSlice.actions;
export default prescriptionSlice.reducer;
