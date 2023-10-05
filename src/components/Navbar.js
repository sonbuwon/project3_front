import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ userRole }) {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const doTempLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      alert("로그아웃 되셨습니다.");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  // react-router v6에서 데이터 전달 하는 방법
  const handleSearch = () => {
    navigate("/restaurant/search", {
      state: { keyword: keyword },
    });
  };

  return (
    <div className="header">
      <div className="header-area">
        <div>
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <button onClick={handleSearch}>검색</button>
        </div>
        <div className="dropdown-Menu">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/restaurant/byCategory/한식">한식</Link> |{" "}
              <Link to="/restaurant/byCategory/일식">일식</Link> |{" "}
              <Link to="/restaurant/byCategory/중식">중식</Link> |{" "}
              <Link to="/restaurant/byCategory/양식">양식</Link> |{" "}
              <Link to="/restaurant/byCategory/카페">카페</Link>
            </li>
            <li>
              <Link to="/restaurant/byCategory/피자">피자</Link> |{" "}
              <Link to="/restaurant/byCategory/치킨">치킨</Link> |{" "}
              <Link to="/restaurant/byCategory/분식">분식</Link> |{" "}
              <Link to="/restaurant/byCategory/고기">고기</Link> |{" "}
              <Link to="/restaurant/byCategory/호텔">호텔</Link> |{" "}
              <Link to="/restaurant/byCategory/오마카세">오마카세</Link> |{" "}
              <Link to="/restaurant/byCategory/파인다이닝">파인다이닝</Link>
            </li>
            <li>
              <Link to="/restaurant/list">식당 목록</Link>
            </li>
            <li>
              <Link to="/restaurant/top">실시간 TOP</Link>
            </li>
            {userRole === null && (
              <li>
                <Link to="/user/signup">회원가입</Link>
              </li>
            )}
            {userRole === null && (
              <li>
                <Link to="/user/login">로그인</Link>
              </li>
            )}
            {userRole === "ROLE_USER" && (
              <li>
                <Link to="/user/mypage">마이페이지</Link>
              </li>
            )}
            {userRole === "ROLE_ADMIN" && (
              <li>
                <Link to="/admin/registerRestaurant">업체 등록</Link>
              </li>
            )}
            {userRole === "ROLE_ADMIN" && (
              <li>
                <Link to="/admin/restaurantList">식당 목록(관리자용)</Link>
              </li>
            )}
            {userRole !== null && (
              <li>
                <button onClick={doTempLogout}>로그아웃</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
