import React, { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";
const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "''",
  complete: false,
};

function ModiComp({ tno }) {
  const [todo, setTodo] = useState({ ...initState });

  const [result, setResult] = useState(null);
  const { moveToList, moveToRead } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((res) => {
      console.log(res);
      setTodo(res);
    });
  }, []);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  const handleChangeTodoComp = (e) => {
    const value = e.target.value;

    todo.complete = value === "Y"; //true or false
    setTodo({ ...todo });
  };

  const handleClickModi = () => {
    console.log(todo);
    putOne(todo).then((data) => {
      setResult("수정");
    });
  };

  const handleClickDel = () => {
    deleteOne(tno).then((data) => {
      setResult("삭제");
    });
  };

  const closeModal = () => {
    if (result === "삭제") {
      moveToList();
    } else {
      moveToRead(tno);
    }
  };

  return (
    <div>
      진행 : {result}
      {result ? (
        <ResultModal
          title="처리결과"
          content={result}
          callbackFn={closeModal}
        />
      ) : null}
      <div className="flex gap-2">
        <div>TNO</div>

        {todo.tno}
      </div>
      <div className="flex gap-2">
        <div>writer</div>

        {todo.writer}
      </div>
      <div className="flex gap-2">
        <div>title</div>

        <input
          type="text"
          name="title"
          className="border-gray-300 border-2"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>dueDate</div>

        <input
          type="date"
          name="dueDate"
          className="border-gray-300 border-2"
          value={todo.dueDate}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>complete</div>

        <select
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComp}
        >
          <option value="Y">완료</option>
          <option value="N">미완료</option>
        </select>
      </div>
      <div className="flex my-4 justify-end gap-2">
        <button
          className="bg-green-500 rounded py-2 px-4 text-white"
          onClick={handleClickModi}
        >
          글수정
        </button>

        <button
          className="bg-red-500 rounded py-2 px-4 text-white"
          onClick={handleClickDel}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default ModiComp;
