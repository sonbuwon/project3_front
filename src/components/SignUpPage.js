import React, { useState } from "react";

function SignupPage() {
  const [mid, setMid] = useState(""); // 사용자 ID
  const [mpw, setMpw] = useState(""); // 비밀번호

  const handleSignup = () => {
    fetch("/api/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // 서버에 전송될 데이터 포맷 변경
      body: `mid=${mid}&mpw=${mpw}`,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        if (data === "Success") {
          alert("Successfully signed up!");
        } else {
          alert("Signup failed!");
        }
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        alert("Signup failed due to a network error.");
      });
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <div>
        <input
          type="text"
          value={mid}
          onChange={(e) => setMid(e.target.value)}
          placeholder="ID"
        />
        <br />
        <input
          type="password"
          value={mpw}
          onChange={(e) => setMpw(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default SignupPage;
