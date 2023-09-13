import React, { useState } from "react";
import { localurl } from "../utils/localUrl";

function RegisterPage() {
  const [idValue, setId] = useState("");
  const [pwValue, setPw] = useState("");
  const [nickValue, setNick] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleNickChange = (e) => {
    setNick(e.target.value);
  };

  const handleRegister = () => {
    fetch(`${localurl}/user/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mid: idValue,
        mpw: pwValue,
        nickname: nickValue,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error. Please try again.");
      });
  };

  return (
    <div>
      <p>회원가입 페이지</p>
      <div>
        <input
          value={idValue}
          onChange={handleIdChange}
          placeholder="ID"
          required
        />
        <br />
        <input
          type="password"
          value={pwValue}
          onChange={handlePwChange}
          placeholder="PASSWORD"
          required
        />
        <br />
        <input
          value={nickValue}
          onChange={handleNickChange}
          placeholder="NICKNAME"
          required
        />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;
