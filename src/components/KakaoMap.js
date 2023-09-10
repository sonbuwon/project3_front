import React, { useEffect } from "react";

// 함수형 컴포넌트에 kakao객체 인지시키기
const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <p>KakaoMap</p>
      <div
        id="map"
        style={{ width: "500px", height: "400px", background: "yellow" }}
      ></div>
    </div>
  );
}

export default KakaoMap;
