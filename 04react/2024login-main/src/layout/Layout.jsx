import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const loginState = useSelector((state) => state.loginSlice);
  console.log(loginState);

  return (
    <>
      <nav className="bg-blue-200 px-4">
        <div className="container mx-auto py-4 flex justify-between">
          <h1>logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/test">TEST</Link>
            </li>
            {loginState.email ? (
              <>
                <li>
                  <Link to="/member/logout">LOGINOUT</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/member/login">LOGIN</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className="container mx-auto py-4 px-4">{children}</div>
      <footer className="bg-gray-100">
        <div className="container mx-auto py-4 px-4">푸터영역</div>
      </footer>
    </>
  );
}

export default Layout;
