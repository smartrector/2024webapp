import React from "react";
import ListComp from "../../components/todo/ListComp";

function ListPage() {
  return (
    <div>
      <h3 className="text-2xl py-3 text-end">글리스트</h3>
      <hr className="py-3" />
      <ListComp />
    </div>
  );
}

export default ListPage;
