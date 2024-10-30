import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initialState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initialState,
  reducers: {
    login: (state, action) => {
      console.log("로그인....ok!!!");
      console.log(action.payload);
      // state.email = action.payload.email
      //return { email: action.payload.email };

      setCookie("member", JSON.stringify(action.payload), 1);
      return action.payload;
    },
    logout: () => {
      console.log("로그인아웃....out!!!");
      removeCookie("member");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fullfill");
        // console.log(action.payload);

        const payload = action.payload;
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload), 1);
        }

        return payload;
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("rejected");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
