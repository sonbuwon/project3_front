import React, { useState, useEffect } from "react";
import { localurl } from "../utils/localUrl";

function UserProfile() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");

    fetch(`${localurl}/user/getUserId`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setUserId(data);
      });
  }, []);

  return (
    <div>
      <p>Loggind in: {userId}</p>
    </div>
  );
}

export default UserProfile;
