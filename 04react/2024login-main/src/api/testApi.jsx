import axios from "axios";
import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./todoApi";

const host = `${API_SERVER_HOST}/api/test`;

export const getTest = async () => {
  const res = await jwtAxios.get(`${host}`);
  return res;
};
