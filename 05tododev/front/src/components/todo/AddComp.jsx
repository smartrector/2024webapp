import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  title: "",
  writer: "",
  deuDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState({ ...initState });
  //   const [title, setTitle] = useState("");

  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  return (
    <div>
      {todo.title}/ {todo.writer} /{todo.deuDate}
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
        <div>deuDate</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="date"
          name="deuDate"
          className="border-gray-300 border-2"
          value={todo.deuDate}
          onChange={handleChangeTodo}
        />
      </div>
    </div>
  );
}

export default AddComp;
