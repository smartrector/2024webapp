import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

function ReadComp({ tno }) {
  const [todo, setTodo] = useState(initState);

  const { moveToList } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((res) => {
      console.log(res);
      setTodo(res);
    });
  }, [tno]);
  return (
    <div>
      {makeDiv("NUM", todo.tno)}
      {makeDiv("TITLE", todo.title)}
      {makeDiv("DATE", todo.dueDate)}

      <div className="flex justify-end gap-3">
        <button
          className="bg-red-500 rounded py-2 px-4 text-white"
          onClick={() => {
            moveToList();
          }}
        >
          리스트
        </button>

        <button className="bg-blue-500 rounded py-2 px-4 text-white">
          수정
        </button>
      </div>
    </div>
  );
}

const makeDiv = (title, value) => (
  <div className="flex">
    <div className="w-3/12 font-extrabold">{title}</div>
    <div className="w-9/12">{value}</div>
  </div>
);
export default ReadComp;
