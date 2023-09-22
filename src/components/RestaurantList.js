import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { localurl } from "../utils/localUrl";
import { formatTime } from "../utils/formatTime";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

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
      <h3>전체 리스트</h3>
      <table>
        <thead>
          <tr>
            <th>식당명</th>
            <th>위치</th>
            <th>카테고리</th>
            <th>소개</th>
            <th>오픈 시간</th>
            <th>마감 시간</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>
                <Link to={`/restaurant/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </td>
              <td>{restaurant.location}</td>
              <td>{restaurant.category}</td>
              <td>{restaurant.description}</td>
              <td>{formatTime(restaurant.openingTime)}</td>
              <td>{formatTime(restaurant.closingTime)}</td>
              <td>{restaurant.callNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
