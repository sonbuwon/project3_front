// import { useEffect, useState } from "react";
import "./App.css";
// import KakaoMap from "./components/KakaoMap";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RestaurantForm from "./components/RestaurantForm";
// import TokenPage from "./components/TokenPage";
import SamplePage from "./components/SamplePage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      {/* <KakaoMap /> */}
      <UserProfile />
      <RegisterPage />
      <LoginPage />
      <SamplePage />
      {/* <TokenPage /> */}
      <RestaurantForm />
    </div>
  );
}

export default App;
