// import { useEffect, useState } from "react";
import "./App.css";
// import KakaoMap from "./components/KakaoMap";
// import { localurl } from "./utils/localUrl";
import LoginPage from "./components/LoginPage";
import TokenPage from "./components/TokenPage";
// import SamplePage from "./components/SamplePage";

function App() {
  return (
    <div className="App">
      {/* <KakaoMap /> */}
      {/* <SamplePage /> */}
      <LoginPage />
      <TokenPage />
    </div>
  );
}

export default App;
