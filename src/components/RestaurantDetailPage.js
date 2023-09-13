import React, { useEffect, useState } from "react";
import { localurl } from "../utils/localUrl";
import { formatTime } from "../utils/formatTime";
import KakaoMap from "./KakaoMap";

// 지금은 상세페이지 아님(수정 필요)
function RestaurantDetailPage() {
  const [restaurants, setRestaurants] = useState([]);

  // 삭제 버튼 클릭시 해당 식당 삭제
  const deleteRestaurant = (id) => {
    fetch(`${localurl}/store/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // 성공적으로 삭제된 경우, 리스트에서 해당 항목을 제거
          setRestaurants(
            restaurants.filter((restaurant) => restaurant.id !== id)
          );
        } else {
          console.error("Error deleting restaurant");
        }
      })
      .catch((error) => {
        console.error("Error deleting restaurant: ", error);
      });
  };

  // 마운트시 전체 등록된 식당 전체 출력
  useEffect(() => {
    fetch(`${localurl}/store/list`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  }, []);

  return (
    <div>
      <h3>식당 상세 정보 페이지</h3>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h4>{restaurant.name}</h4>
            <KakaoMap location={restaurant.location} />
            <p>위치: {restaurant.location}</p>
            <p>카테고리: {restaurant.category}</p>
            <p>설명: {restaurant.description}</p>
            <p>오픈 시간: {formatTime(restaurant.openingTime)}</p>
            <p>마감 시간: {formatTime(restaurant.closingTime)}</p>
            <img src={restaurant.image} alt={restaurant.name} />
            <p>전화번호: {restaurant.callNumber}</p>
            <p>예약 횟수: {restaurant.reservationCount}</p>
            <button onClick={() => deleteRestaurant(restaurant.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetailPage;
