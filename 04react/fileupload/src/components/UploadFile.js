import React, { useState } from "react";
import { postFile } from "../api/apiFile";
import { toast } from "react-toastify";

function UploadFile({ handleImageUpload }) {
  const [files, setFiles] = useState([]);
  const [fileName, setFilename] = useState("이미지를 업로드 해주세요");

  const imageSelectHandler = (e) => {
    const imageFiles = e.target.files;
    console.log(imageFiles);

    if (imageFiles.length > 0) {
      setFiles(imageFiles);
      setFilename(imageFiles[0].name);
    } else {
      setFiles(null);
      setFilename("이미지를 업로드 해주세요");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    //formData.append("images",file)

    for (let file of files) formData.append("images", file);

    try {
      const res = await postFile(formData);
      console.log(res);
      handleImageUpload();
      toast.success("이미지업로드 성공");
    } catch (error) {
      toast.error("업로드 실패");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            {fileName}
            <input
              type="file"
              name="image"
              id="inp"
              multiple
              onChange={imageSelectHandler}
            />
          </div>
          <button type="submit">파일전송</button>
        </form>
      </div>
    </>
  );
}

export default UploadFile;
