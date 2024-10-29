import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import useCustomLogin from "../hooks/useCustomLogin";
import { getTest } from "../api/testApi";

const initState = {
  id: 0,
  messag: "",
};

function TestPage() {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  const [data, setData] = useState({ ...initState });

  if (!isLogin) {
    return moveToLoginReturn();
  }

  useEffect(() => {
    const res = getTest().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Layout>
      <div>TestPage</div>
    </Layout>
  );
}

export default TestPage;
