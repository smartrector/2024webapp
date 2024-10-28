import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("로그인....ok!!!");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("로그인아웃....out!!!");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
