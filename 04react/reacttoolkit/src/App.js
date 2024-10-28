import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterStore = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    up: (state, action) => {
      console.log("test");
      state.num += action.payload;
    },
  },
});

const counterStore1 = createSlice({
  name: "counter1",
  initialState: { num1: 100 },
  reducers: {
    up: () => {
      console.log("test1");
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
    counter1: counterStore1.reducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <div>test</div>
        <ChildOne />
      </div>
    </Provider>
  );
}

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  const num1 = useSelector((state) => state.counter1.num1);

  return (
    <div>
      child{num} / {num1}
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        click1
      </button>
    </div>
  );
}

export default App;
