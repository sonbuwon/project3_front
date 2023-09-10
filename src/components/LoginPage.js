import React, { useState } from "react";
import { localurl } from "../utils/localUrl";

function LoginPage() {
  const [idValue, setId] = useState("");
  const [pwValue, setPw] = useState("");
  const saveUserId = (e) => {
    setId(e.target.value);
  };
  const saveUserPw = (e) => {
    setPw(e.target.value);
  };

  const doLogin = () => {
    console.log("Login!!");

    fetch(`${localurl}/generateToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mid: idValue,
        mpw: pwValue,
      }),
    })
      .then((response) => {
        // 응답 본문을 텍스트로 읽음
        return response.text();
      })
      .then((textData) => {
        console.log(textData);
        // 텍스트 데이터를 JSON으로 변환
        const jsonData = JSON.parse(textData);
        console.log("Parsed JSON data:", jsonData);
        localStorage.setItem("accessToken", jsonData.accessToken);
        localStorage.setItem("refreshToken", jsonData.refreshToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>LoginPage</p>
      <div>
        <input value={idValue} onChange={saveUserId} placeholder="ID" />
        <br />
        <input value={pwValue} onChange={saveUserPw} placeholder="PASSWORD" />
      </div>
      <div>
        <button onClick={doLogin}>Generate Token</button>
      </div>
    </div>
  );
}

export default LoginPage;
