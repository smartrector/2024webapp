import React from "react";
import { useParams } from "react-router-dom";
import ModiComp from "../../components/todo/ModiComp";

function ModifyPage() {
  const { tno } = useParams();
  return (
    <div>
      <ModiComp tno={tno} />
    </div>
  );
}

export default ModifyPage;
