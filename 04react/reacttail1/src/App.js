import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(2);

  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [num]);

  return (
    <div>
      <button onClick={onClick}>클릭</button>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            {item.id} / {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
