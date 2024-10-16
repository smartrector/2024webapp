import { ToastContainer } from "react-toastify";
import { getFileList } from "./api/apiFile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import UploadFile from "./components/UploadFile";

function App() {
  const [imgData, setImgData] = useState([]);
  const [imageUpload, setImageUpload] = useState(false);

  useEffect(() => {
    fetchData();
  }, [imageUpload]);

  const fetchData = async () => {
    const updateImgList = await getFileList();
    setImgData(updateImgList);
  };

  const handleImageUpload = () => {
    setImageUpload(!imageUpload);
  };

  return (
    <div className="App">
      <h2>사진첩</h2>
      <UploadFile handleImageUpload={handleImageUpload} />
      <ImageList imgData={imgData} />
      <ToastContainer
        position="bottom-center"
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
