import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store/byCategory/한식">한식</Link> |{" "}
          <Link to="/store/byCategory/일식">일식</Link> |{" "}
          <Link to="/store/byCategory/중식">중식</Link> |{" "}
          <Link to="/store/byCategory/양식">양식</Link> |{" "}
          <Link to="/store/byCategory/카페">카페</Link>
        </li>
        <li>
          <Link to="/store/byCategory/피자">피자</Link> |{" "}
          <Link to="/store/byCategory/치킨">치킨</Link> |{" "}
          <Link to="/store/byCategory/분식">분식</Link> |{" "}
          <Link to="/store/byCategory/고기">고기</Link> |{" "}
          <Link to="/store/byCategory/호텔">호텔</Link> |{" "}
          <Link to="/store/byCategory/오마카세">오마카세</Link> |{" "}
          <Link to="/store/byCategory/파인다이닝">파인다이닝</Link>
        </li>
        <li>
          <Link to="/store/list">Restaurant List</Link>
        </li>
        <li>
          <Link to="/store/top">Top Restaurants</Link>
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
