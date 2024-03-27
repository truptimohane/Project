import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_categories() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    catg_name: "",
    catg_img: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/chefs`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({ ...formvalue, catg_name: "", catg_img: "" });
      alert("Chef's details submited success");
      return false;
    }
  };

  return (
    <div
      className="admin-panel"
      style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
    >
      <h1 className="text-center mt-5 text-primary">Add Categories</h1>
      <div className="container pb-3">
        <form role="form" action="" method="post" onSubmit={submithandel}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label text-danger"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Add Categories
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="catg_name"
              value={formvalue.catg_name}
              onChange={getform}
              required
              style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label text-success"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Categories'Image
            </label>
            <input
              type="url"
              className="form-control"
              id="cat-img"
              name="catg_img"
              value={formvalue.catg_img}
              onChange={getform}
              required
              style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ borderRadius: "10px", fontSize: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add_categories;
