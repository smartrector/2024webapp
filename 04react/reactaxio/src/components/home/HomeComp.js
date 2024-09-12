import React, { useEffect } from "react";

function HomeComp() {
  useEffect(() => {
    // 카카오 맵 스크립트 동적 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=05222ace53571c8fbb636c91def0fbc2&autoload=false`;
    script.async = true;

    // 스크립트가 로드되면 카카오맵을 초기화
    script.onload = () => {
      window.kakao.maps.load(() => {
        initialMap();
      });
    };

    document.head.appendChild(script);
  }, []);

  const initialMap = () => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    var map = new window.kakao.maps.Map(mapContainer, mapOption);
  };

  return (
    <>
      <div id="map" style={{ width: "500px", height: "500px" }}></div>
    </>
  );
}

export default HomeComp;
