import { useSearchParams } from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  return { page, size };
};

export default useCustomMove;
