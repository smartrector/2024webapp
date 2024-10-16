import { ToastContainer } from "react-toastify";
import { getFileList } from "./api/apiFile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const updateImgList = getFileList();
    setImgData(updateImgList);
  };

  return (
    <div className="App">
      <h2>사진첩</h2>

      <ImageList imgData={imgData} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
