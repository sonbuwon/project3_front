import React, { useState } from "react";
import { localurl } from "../utils/localUrl";
import { useNavigate } from "react-router-dom";

function RestaurantForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    description: "",
    openingTime: "",
    closingTime: "",
    image: "",
    callNumber: "",
  });

  const [fileInputs, setFileInputs] = useState([0]); // 초기 상태에 하나의 파일 입력 필드
  const [files, setFiles] = useState({});

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
        method: "POST",
        body: data,
      })
    )
      .then((response) => response.text())
      .then(() => {
        alert("식당이 등록되었습니다.");
        navigate("/store/list");
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  };

  return (
    <div>
      <p>식당 등록</p>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Category --</option>
          <option value="족발보쌈">족발보쌈</option>
          <option value="찜탕찌개">찜탕찌개</option>
          <option value="돈까스회일식">돈까스회일식</option>
          <option value="피자">피자</option>
          <option value="고기구이">고기구이</option>
          <option value="야식">야식</option>
          <option value="양식">양식</option>
          <option value="치킨">치킨</option>
          <option value="중식">중식</option>
          <option value="아시안">아시안</option>
          <option value="분식">분식</option>
          <option value="카페디저트">카페디저트</option>
          <option value="패스트푸드">패스트푸드</option>
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
          Add another image
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
