import axios from "axios";
const baseURL = process.env.REACT_APP_DEV_HOST;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postFile = async (data) => {
  try {
    const response = await axiosInstance.post("/file", data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFileList = async () => {
  try {
    const response = await axiosInstance.get("/filelist");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFileById = async (id) => {
  try {
    const response = await axiosInstance.get(`/file/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
