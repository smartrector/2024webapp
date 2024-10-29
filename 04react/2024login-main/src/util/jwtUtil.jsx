import axios from "axios";
import { getCookie } from "./cookieUtil";

const jwtAxios = axios.create();

const beforeReq = (config) => {
  console.log("beforeReq.........");

  const memberInfo = getCookie("member");

  if (!memberInfo) {
    return Promise.reject({ response: { data: { error: "Require_login" } } });
  }

  const { accessToken } = memberInfo;

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
const requestFail = (error) => {
  console.log("requestFail...........");
  return Promise.reject(error);
};

const beforeRes = (res) => {
  console.log("beforeResponse................");
  console.log(res);
};
const responseFail = (error) => {
  console.log("responseFail...........");
  return Promise.reject(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
