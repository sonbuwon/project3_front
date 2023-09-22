import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import jwt_decode from "jwt-decode";

// 권한에 따른 라우터 처리 하는 메소드
function ProtectedRoute({ element, userRole, requiredRole, redirectTo }) {
  return userRole === requiredRole ? element : <Navigate to={redirectTo} />;
}

function App() {
  // 접속 유저 확인
  const token = localStorage.getItem("refreshToken");
  let userRole = null;

  if (token != null) {
    const decoded = jwt_decode(token);
    userRole = decoded.role;
  }
  console.log(userRole);

  return (
    <div className="App">
      <UserProfile />
      <Router>
        <Navbar userRole={userRole} />
        <Routes>
          <Route path="/user/signup" element={<RegisterPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store/list" element={<RestaurantList />} />
          <Route path="/store/:id" element={<RestaurantDetailPage />} />
          <Route path="/store/top" element={<TopRatedRestaurantList />} />
          <Route
            path="/store/byCategory/:category"
            element={<CategoryRestaurantList />}
          />
          <Route
            path="/admin/registerRestaurant"
            element={
              <ProtectedRoute
                element={<RestaurantForm />}
                userRole={userRole}
                requiredRole="ROLE_ADMIN"
                redirectTo="/"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
