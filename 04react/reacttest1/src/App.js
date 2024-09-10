import React, { useState } from "react";

function App() {
  const [data, setData] = useState("test");

  function dataChange() {
    setData("testChange");
  }
  function dataChange1() {
    setData("testChange1");
  }
  return (
    <div style={{ background: "pink", padding: "10px" }}>
      App
      <SubCom1 data={data} dataModi1={dataChange} sdataModi2={dataChange1} />
    </div>
  );
}

function SubCom1(props) {
  return (
    <>
      <div style={{ background: "skyblue", padding: "10px" }}>
        <h3>subcom1</h3>
        <p>{props.data}</p>
        <button onClick={props.dataModi1}>변경1</button>
        <SubCom2 sData={props.data} dataModi2={props.sdataModi2} />
      </div>
    </>
  );
}

function SubCom2(props) {
  return (
    <>
      <div style={{ background: "green" }}>
        <h3>subcom2</h3>
        <p>{props.sData}</p>
        <button onClick={props.dataModi2}>변경2</button>
      </div>
    </>
  );
}

export default App;
