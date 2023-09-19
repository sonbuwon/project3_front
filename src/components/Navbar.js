import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">Restaurant List</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/mypage">My Page</Link>
        </li>
        <li>
          <Link to="/restaurantform">Restaurant register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
