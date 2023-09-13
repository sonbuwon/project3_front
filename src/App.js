import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import RestaurantForm from "./components/RestaurantForm";
import SamplePage from "./components/SamplePage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <RegisterPage />
      <LoginPage />
      <SamplePage />
      <RestaurantForm />
      <RestaurantDetailPage />
    </div>
  );
}

export default App;
