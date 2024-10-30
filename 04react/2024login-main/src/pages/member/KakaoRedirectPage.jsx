import React from "react";
import { useSearchParams } from "react-router-dom";

function KakaoRedirectPage() {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  return (
    <div>
      KakaoRedirectPage
      <div>{authCode}</div>
    </div>
  );
}

export default KakaoRedirectPage;
