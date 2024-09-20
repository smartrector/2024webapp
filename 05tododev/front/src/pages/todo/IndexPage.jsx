import React from "react";
import Layout from "../../layout/Layout";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
  //   const clickList = () => {
  //     navigate({ pathname: "list" });
  //   };
  //   const clickAdd = () => {
  //     navigate({ pathname: "add" });
  //   };
  //   const clickRead = () => {
  //     navigate({ pathname: "list/1" });
  //   };
  return (
    <Layout>
      {/* <nav className="flex justify-end">
        <ul className="flex gap-3">
          <li
            onClick={() => {
              clickList();
            }}
          >
            list
          </li>
          <li
            onClick={() => {
              clickRead();
            }}
          >
            read
          </li>
          <li
            onClick={() => {
              clickAdd();
            }}
          >
            add
          </li>
        </ul>
      </nav> */}

      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
