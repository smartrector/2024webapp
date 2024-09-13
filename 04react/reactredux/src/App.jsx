import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const init = {
  value: 100,
  title: "test",
};

const reducer = (state = init, action) => {
  console.log(state);
  console.log(action.type);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  // const couterValue = useSelector((state)=>{return state.value})
  const counterValue = useSelector((state) => state.value);
  const titleValue = useSelector((state) => state.title);

  const dispatch = useDispatch();

  return (
    <>
      {counterValue} / {titleValue}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 2 });
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default App;
