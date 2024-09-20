import React from "react";
import ReadComp from "../../components/todo/ReadComp";
import { useParams } from "react-router-dom";

function ReadPage() {
  const { tno } = useParams();

  return (
    <div>
      <ReadComp tno={tno} />
    </div>
  );
}

export default ReadPage;
