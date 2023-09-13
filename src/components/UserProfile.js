import React, { useState, useEffect } from "react";
import { localurl } from "../utils/localUrl";

function UserProfile() {
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");

    fetch(`${localurl}/user/getUserNickname`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.text())
      .then((data) => {
        // 닉네임 잘 출력되는 확인
        // console.log(data);
        setUserNickname(data);
      });
  }, []);

  return (
    <div>
      <p>접속한 유저: {userNickname}</p>
    </div>
  );
}

export default UserProfile;
