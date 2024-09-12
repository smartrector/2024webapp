import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/products">product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
