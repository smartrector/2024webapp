import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState({ ...initState });
  //   const [title, setTitle] = useState("");
  const [result, setResult] = useState(null);

  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClickAdd = () => {
    postAdd(todo)
      .then((result) => {
        console.log(result);
        setResult(result.TNO);
        setTodo({ ...initState });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const closeModal = () => {
    setResult(null);
    moveToList();
  };
  return (
    <div>
      {result ? (
        <ResultModal
          title="글쓰기추가"
          content={`새로운 ${result} 추가완료`}
          callbackFn={closeModal}
        />
      ) : null}
      <div className="flex gap-2">
        <div>title</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="text"
          name="title"
          className="border-gray-300 border-2"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>writer</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="text"
          name="writer"
          className="border-gray-300 border-2"
          value={todo.writer}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>dueDate</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="date"
          name="dueDate"
          className="border-gray-300 border-2"
          value={todo.dueDate}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex my-4 justify-end">
        <button
          className="bg-green-500 rounded py-2 px-4 text-white"
          //   onClick={() => {
          //     handleClickAdd()
          //   }}
          onClick={handleClickAdd}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default AddComp;
