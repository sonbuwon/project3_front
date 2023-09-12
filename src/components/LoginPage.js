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
    // console.log("Login!!");

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
        //console.log(textData);
        // 텍스트 데이터를 JSON으로 변환
        const jsonData = JSON.parse(textData);
        // 토큰 정보 콘솔 출력
        //console.log("Parsed LoginPage JSON data:", jsonData);
        // 로컬 스토리지에 저장
        localStorage.setItem("accessToken", jsonData.accessToken);
        localStorage.setItem("refreshToken", jsonData.refreshToken);
        // 로그인시 새로고침(삭제 예정)
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // 임시 로그아웃(발행한 토큰을 삭제하는 기능으로)
  // 로그아웃시 메인 홈페이지로 돌아가게끔 구현해야된다
  const doTempLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // 로그아웃시 새로고침
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>로그인 페이지</p>
      <div>
        <input value={idValue} onChange={saveUserId} placeholder="ID" />
        <br />
        <input value={pwValue} onChange={saveUserPw} placeholder="PASSWORD" />
      </div>
      <div>
        <button onClick={doLogin}>Login(Generate Token)</button>
      </div>
      <div>
        <button onClick={doTempLogout}>Logout</button>
      </div>
    </div>
  );
}

export default LoginPage;
