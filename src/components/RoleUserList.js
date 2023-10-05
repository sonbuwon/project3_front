import React, { useEffect, useState } from "react";
import { localurl } from "../utils/localUrl";
import { formatDay } from "../utils/formatDay";

function RoleUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    if (!token) {
      return;
    }

    fetch(`${localurl}/admin/user/list`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteUser = (id) => {
    const token = localStorage.getItem("refreshToken");

    fetch(`${localurl}/admin/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          // 성공적으로 삭제된 경우, 리스트에서 해당 항목을 제거
          setUsers(users.filter((user) => user.mid !== id));
        } else {
          console.error("Error deleting user");
        }
      })
      .catch((error) => {
        console.error("Error deleting usert: ", error);
      });
  };

  return (
    <div>
      <h3>유저 목록(관리자용)</h3>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>닉네임</th>
            <th>이메일</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.mid}>
              <td>{user.mid}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
              <td>{formatDay(user.birth)}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button onClick={() => deleteUser(user.mid)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleUserList;
