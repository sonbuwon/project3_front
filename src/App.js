import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import SamplePage from "./components/SamplePage";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<SamplePage />} />
          <Route path="/restaurantform" element={<RestaurantForm />} />
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/store/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
