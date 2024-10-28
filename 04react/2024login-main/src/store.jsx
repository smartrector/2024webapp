import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});

export default store;
