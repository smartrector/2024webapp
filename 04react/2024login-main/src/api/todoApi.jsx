import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";
const perfix = `${API_SERVER_HOST}/api/todo`;

//   localhost:8081/api/todo/list?page=1&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${perfix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const getOne = async (tno) => {
  const res = await axios.get(`${perfix}/${tno}`);
  return res.data;
};

export const postAdd = async (obj) => {
  const res = await axios.post(`${perfix}/`, obj);
  return res.data;
};

export const deleteOne = async (tno) => {
  const res = await axios.delete(`${perfix}/${tno}`);
  return res.data;
};

export const putOne = async (todo) => {
  const res = await axios.put(`${perfix}/${todo.tno}`, todo);
  return res.data;
};
