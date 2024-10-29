import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/todoApi";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;
  const header = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const res = await axios.get(
    `${host}/api/member/refresh?refreshToken=${refreshToken}`,
    header
  );
  return res.data;
};

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

const beforeRes = async (res) => {
  console.log("beforeResponse................");
  console.log(res);

  const data = res.data;
  if (data && data.error === "ERROR_ACCESS_TOKEN") {
    const memberCookieValue = getCookie("member");

    const result = await refreshJWT(
      memberCookieValue.accessToken,
      memberCookieValue.refreshToken
    );

    memberCookieValue.accessToken = result.accessToken;
    memberCookieValue.refreshToken = result.refreshToken;

    setCookie("member", JSON.stringify(memberCookieValue), 1);
  }

  return res;
};
const responseFail = (error) => {
  console.log("responseFail...........");
  return Promise.reject(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
