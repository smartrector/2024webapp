import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { login } from "../../slices/loginSlice";

function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");

  const dispatch = useDispatch();
  const { moveToPath } = useCustomLogin();

  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log(accessToken);
      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log(memberInfo);
        dispatch(login(memberInfo));
        moveToPath("/");

        // if(memberInfo && memberInfo.social){
        //     moveToPath("/member/modify")
        // }else{
        //     moveToPath("/");
        // }
      });
    });
  }, [authCode]);

  return (
    <div>
      KakaoRedirectPage
      <div>{authCode}</div>
    </div>
  );
}

export default KakaoRedirectPage;
