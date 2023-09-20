import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { localurl } from "../utils/localUrl";
import { formatTime } from "../utils/formatTime";
import KakaoMap from "./KakaoMap";
import { useNavigate } from "react-router-dom";

function RestaurantDetailPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null); // 이 부분은 식당 하나의 상세 정보만을 가져오도록 수정하였습니다.
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${localurl}/store/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(`${localurl}/store/${id}`);
        setRestaurant(data);
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  }, [id]);

  const reserveRestaurant = () => {
    const reservationData = {
      restaurantId: id,
    };

    const token = localStorage.getItem("refreshToken");

    fetch(`${localurl}/user/reserve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Authorization 헤더에 토큰을 설정합니다.
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => {
        if (response.ok) {
          alert("예약이 완료되었습니다.");
          // 차후엔 마이페이지로 이동
          // 일단 홈으로 이동
          navigate("/");
        } else {
          console.error("예약 실패");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!restaurant) return <div>Loading....</div>;

  return (
    <div>
      <h3>식당 상세 정보 페이지</h3>
      <h4>{restaurant.name}</h4>
      <KakaoMap location={restaurant.location} />
      <p>위치: {restaurant.location}</p>
      <p>카테고리: {restaurant.category}</p>
      <p>설명: {restaurant.description}</p>
      <p>오픈 시간: {formatTime(restaurant.openingTime)}</p>
      <p>마감 시간: {formatTime(restaurant.closingTime)}</p>
      {restaurant.imageIds &&
        restaurant.imageIds.map((restaurantImageId, index) => (
          <img
            key={index}
            src={`${localurl}/store/${id}/image/${restaurantImageId}`}
            alt={`${restaurant.name}-${index}`}
            width={"200"}
          />
        ))}
      <p>전화번호: {restaurant.callNumber}</p>
      <p>예약 횟수: {restaurant.reservationCount}</p>
      <button onClick={reserveRestaurant}>예약하기</button>
    </div>
  );
}

export default RestaurantDetailPage;
