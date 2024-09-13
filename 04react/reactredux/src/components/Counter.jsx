import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

export default Counter;
