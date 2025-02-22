import { configureStore } from "@reduxjs/toolkit";
import prescriptionReducer from "./prescriptionSlice";

const store = configureStore({
  reducer: {
    counter: prescriptionReducer,
  },
});

export default store;
