import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ok");
  }, []);

  // useEffect(() => {
  //   console.log("good");
  // }, [count]);

  return (
    <div>
      {num} / {count} <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        클릭1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭2
      </button>
    </div>
  );
}

export default App;
