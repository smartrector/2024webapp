import React from "react";
import Layout from "../layout/Layout";
import useCustomLogin from "../hooks/useCustomLogin";

function AboutComp() {
  const { isLogin, loginState } = useCustomLogin();

  if (isLogin) {
    alert("로그인중");
    console.log("test");
  }

  return (
    <Layout>
      <div>AboutComp</div>
    </Layout>
  );
}

export default AboutComp;
