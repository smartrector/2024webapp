import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function ListComp() {
  const [data, setData] = useState(initState);
  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>ListComp</div>;
}

export default ListComp;
