import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import PagerComp from "../common/PagerComp";

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
  const { page, size, moveToRead, refresh, moveToList, moveToWrite } =
    useCustomMove();
  const [data, setData] = useState(initState);
  //   const [queryParams] = useSearchParams();
  //   console.log(queryParams.get("size"));

  //   const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  //   const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  //   console.log(page, size);
  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [page, size, refresh]);
  return (
    <div>
      {data.dtoList.map((item, i) => {
        return (
          <div
            key={i}
            className="flex border-b-2 py-3"
            onClick={() => {
              moveToRead(item.tno);
            }}
          >
            <div className="text-2xl w-1/12">{item.tno}</div>
            <div className="text-2xl w-7/12 font-extrabold">{item.title}</div>
            <div className="text-2xl w-4/12">{item.dueDate}</div>
          </div>
        );
      })}

      <div className="flex my-4 justify-end">
        <button
          className="bg-green-500 rounded py-2 px-4 text-white"
          onClick={() => {
            moveToWrite();
          }}
        >
          글쓰기
        </button>
      </div>

      <PagerComp serverData={data} movePage={moveToList} />
    </div>
  );
}

export default ListComp;
