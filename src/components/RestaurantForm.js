import React, { useState } from "react";
import { localurl } from "../utils/localUrl";
import { useNavigate } from "react-router-dom";
import Post from "../utils/Post";

function RestaurantForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: "",
    description: "",
    openingTime: "09:00",
    closingTime: "20:00",
    image: "",
    callNumber: "",
  });

  const [fileInputs, setFileInputs] = useState([0]); // 초기 상태에 하나의 파일 입력 필드
  const [files, setFiles] = useState({});
  // 여기부터 주소창
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      [e.target.name]: e.target.value,
    });

    setFormData((prev) => ({
      ...prev,
      address: e.target.value,
    }));
  };

  const handleComplete = (data) => {
    setPopup(!popup);
    setFormData((prev) => ({
      ...prev,
      address: enroll_company.address,
    }));
  };
  // 여기까지 주소창

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, index) => {
    const updatedFiles = { ...files };
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const addFileInput = () => {
    setFileInputs((prev) => [...prev, prev.length]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("refreshToken");

    if (!token) {
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    Object.keys(files).forEach((key) => {
      data.append("image", files[key]);
    });

    const timeout = (ms, promise) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Request timed out"));
        }, ms);
        promise.then(resolve, reject);
      });
    };

    timeout(
      6000,
      fetch(`${localurl}/admin/upload`, {
        headers: {
          Authorization: token,
        },
        method: "POST",
        body: data,
      })
    )
      .then((response) => {
        if (response.ok) {
          alert("식당이 등록되었습니다.");
          navigate("/admin/restaurantList");
          console.log(formData.address);
        } else {
          alert("식당 등록에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  };

  return (
    <div>
      <h3>업체 등록</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        {/* <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <br /> */}
        <input
          className="user_enroll_text"
          placeholder="Address"
          type="text"
          required={true}
          name="location"
          onChange={handleInput}
          value={enroll_company.address}
        />
        <button onClick={handleComplete}>우편번호 찾기</button>
        {popup && (
          <Post
            company={enroll_company}
            setcompany={(company) => {
              setEnroll_company(company);
              setFormData((prev) => ({
                ...prev,
                address: company.address,
              }));
            }}
          ></Post>
        )}
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- 카테고리 선택 --</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
          <option value="카페">카페</option>
          <option value="피자">피자</option>
          <option value="치킨">치킨</option>
          <option value="분식">분식</option>
          <option value="고기">고기</option>
          <option value="호텔">호텔</option>
          <option value="오마카세">오마카세</option>
          <option value="파인다이닝">파인다이닝</option>
        </select>
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="openingTime"
          type="time"
          placeholder="Opening Time"
          value={formData.openingTime}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="closingTime"
          type="time"
          placeholder="Closing Time"
          value={formData.closingTime}
          onChange={handleChange}
          required
        />
        <br />
        {fileInputs.map((index) => (
          <div key={index}>
            <input
              type="file"
              name={"image" + index}
              onChange={(e) => handleFileChange(e, index)}
            />
            <br />
          </div>
        ))}
        <button type="button" onClick={addFileInput}>
          +
        </button>
        <br />
        <input
          name="callNumber"
          placeholder="Call Number"
          value={formData.callNumber}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;
