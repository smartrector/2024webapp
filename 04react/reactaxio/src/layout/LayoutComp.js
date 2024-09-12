import React from "react";
import NavComp from "./NavComp";
import { Outlet } from "react-router-dom";
import FooterComp from "./FooterComp";

function LayoutComp() {
  return (
    <>
      <NavComp />
      <Outlet />
      <FooterComp />
    </>
  );
}

export default LayoutComp;
