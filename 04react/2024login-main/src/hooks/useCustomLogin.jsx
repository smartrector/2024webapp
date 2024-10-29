import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCustomLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginSlice);

  const isLogin = loginState.email ? true : false;

  return { loginState, isLogin };
};

export default useCustomLogin;
