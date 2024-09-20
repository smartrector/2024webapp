import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

function ReadComp({ tno }) {
  const [todo, setTodo] = useState();

  useEffect(() => {
    getOne(tno).then((res) => {
      console.log(res);
      setTodo(res);
    });
  }, [tno]);
  return <div>ReadComp</div>;
}

export default ReadComp;
