import React from "react";
import { Link } from "react-router-dom";
import { getKakoLoginLink } from "../../api/kakaoApi";

const link = getKakoLoginLink();

function KakaoLginComp() {
  return (
    <div className="bg-yellow-400 text-center hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 mt-5">
      <Link to={link}>kakao login</Link>
    </div>
  );
}

export default KakaoLginComp;
