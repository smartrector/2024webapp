import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalpage, setTotalpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log("totaldata : " + res.data.length);
      console.log("totalpage : " + res.data.length / listCnt);

      setTotalpage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = startPage + pagerCnt - 1;

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            alert(i);
          }}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            {item.id}. {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
