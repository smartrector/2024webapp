import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/loginSlice";

function LogoutComp() {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={handleClickLogout}>로그아웃</button>
    </div>
  );
}

export default LogoutComp;
