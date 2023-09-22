import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";

function Navbar({ userRole }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
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
          <Link to="/store/list">식당 목록</Link>
        </li>
        <li>
          <Link to="/store/top">실시간 TOP</Link>
        </li>
        <li>
          <Link to="/user/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/user/login">로그인</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
        {userRole === "ROLE_ADMIN" && (
          <li>
            <Link to="/admin/registerRestaurant">업체 등록</Link>
          </li>
        )}
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
