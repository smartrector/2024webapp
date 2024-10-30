import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";

function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");

  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log(accessToken);
      getMemberWithAccessToken(accessToken).then((result) => {
        console.log(result);
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
