import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";
  const [box, setBox] = useState("han");
  const [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("안녕하세요");
  let [shop, setShop] = useState(["사과", "복숭아", "바나나"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "orange", fontSize: "20px" }}
      >
        test
        <h2>{text}</h2>
        <p>{box}</p>
        {num}
      </div>
      <header>ddd</header>
      {/* <img src={logo} /> */}
      <button
        onClick={() => {
          // alert("test");
          setBox("changeHan");
        }}
      >
        값변화
      </button>

      <button
        onClick={() => {
          setNum(10);
        }}
      >
        num
      </button>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달
      </button>
      {shop.map((item, i) => {
        return (
          <>
            <div key={i}>{item}</div>
          </>
        );
      })}

      {modal == true ? <Modal title={title} image="test1" /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>공지사항{props.title}</h3>
        <p>상세내용{props.image}</p>
      </div>
    </>
  );
}

export default App;
