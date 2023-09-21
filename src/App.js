import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
// import SamplePage from "./components/SamplePage";
import UserProfile from "./components/UserProfile";
import TopRatedRestaurantList from "./components/TopRatedRestaurantList";
import Navbar from "./components/Navbar";
import MyPage from "./components/MyPage";
import CategoryRestaurantList from "./components/CategoryRestaurantList";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/restaurantform" element={<RestaurantForm />} />
          <Route path="/store/list" element={<RestaurantList />} />
          <Route path="/store/:id" element={<RestaurantDetailPage />} />
          <Route path="/store/top" element={<TopRatedRestaurantList />} />
          <Route
            path="/store/byCategory/:category"
            element={<CategoryRestaurantList />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
