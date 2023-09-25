import React, { useEffect, useState } from "react";
import { localurl } from "../utils/localUrl";

function MyPage() {
  const [userInfo, setUserInfo] = useState({
    mid: "",
    nickname: "",
    reservationList: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");

    if (!token) {
      return;
    }

    fetch(`${localurl}/user/mypage`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  }, []);

  const deleteReservation = (reservationId) => {
    const token = localStorage.getItem("refreshToken");

    if (!token) {
      return;
    }

    fetch(`${localurl}/user/deleteReservation/${reservationId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("예약이 삭제되었습니다.");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error deleting reservation: ", error);
      });
  };

  return (
    <div>
      <h3>{userInfo.nickname}님 안녕하세요</h3>
      <h4>예약 리스트</h4>
      <ul>
        {userInfo.reservationList.length > 0 ? (
          <ul>
            {userInfo.reservationList.map((reservation, index) => (
              <li key={index}>
                {reservation.restaurant_name}
                <button
                  onClick={() => deleteReservation(reservation.reservation_id)}
                >
                  예약 삭제
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>예약 내역이 없습니다</p>
        )}
      </ul>
    </div>
  );
}

export default MyPage;
