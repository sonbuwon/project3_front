import React, { useState } from "react";
import { localurl } from "../utils/localUrl";

function RestaurantForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${localurl}/admin/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      //   .then((data) => {
      //     if (data && data.message) {
      //       alert(data.message);
      //     }
      //   })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
    window.location.reload();
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
          <option value="KOREAN">Korean</option>
          <option value="JAPANESE">Japanese</option>
          <option value="CHINESE">Chinese</option>
          <option value="WESTERN">Western</option>
          <option value="CAFE">Cafe</option>
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
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
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
