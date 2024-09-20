import React from "react";
import Layout from "../../layout/Layout";
import { Outlet } from "react-router-dom";

function IndexPage() {
  return (
    <Layout>
      <nav className="flex justify-end">
        <ul className="flex gap-3">
          <li>list</li>
          <li>add</li>
        </ul>
      </nav>
      <div>IndexPage</div>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
