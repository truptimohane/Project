import React, { useState, useEffect } from "react";
import axios from "axios";

function Add_services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    catg_id: "",
    name: "",
    desc: "",
    price: "",
    service_img: " ",
    status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Available",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/services`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        service_name: "",
        service_desc: "",
        price: "",
        service_img: "",
        status: "",
      });
      alert("Product's details submited success");
      return false;
    }
  };
  return (
    <div>
      <div
        className="admin-panel"
        style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
      >
        <h1 className="text-center mt-5 text-primary">Add Products</h1>
        <div className="container">
          <form role="form" action="" method="post" onSubmit={submithandel}>
            <div className="mb-3">
              <label
                htmlFor="Name"
                className="form-label text-dark"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Categories Name
              </label>{" "}
              {/* <select
                className="form-control"
                id=""
                value={formvalue.catg_id}
                onChange={getform}
                name="catg_id"
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              >
                <option value="">
                  ------- Select Categories of Services ---------
                </option>
                {data.map((value, index, arr) => {
                  return <option value={value.id}>{value.catg_name}</option>;
                })}
              </select> */}
              <select
                name="catg_id"
                id=""
                value={formvalue.catg_id}
                onChange={getform}
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              >
                <option value="">
                  ------- Select Categories of Services ---------
                </option>
                {data.map((value, index, arr) => {
                  return <option value={value.id}>{value.catg_name}</option>;
                })}
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label text-danger"
                style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}
              >
                Service Name
              </label>
              <input
                type="text"
                className="form-control"
                id="service_name"
                value={formvalue.service_name}
                onChange={getform}
                name="service_name"
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label text-success"
                style={{ fontSize: "18px", fontWeight: "bold", color: "green" }}
              >
                Service's Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="service_desc"
                value={formvalue.service_desc}
                onChange={getform}
                required
                placeholder="Enter service description"
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="number"
                className="form-label text-info"
                placeholder="Enter price"
                style={{ fontSize: "18px", fontWeight: "bold", color: "blue" }}
              >
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                name="price"
                value={formvalue.price}
                onChange={getform}
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="image"
                className="form-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ffc107",
                }}
              >
                Service Image
              </label>
              <input
                type="url"
                className="form-control"
                id="service_img"
                name="service_img"
                value={formvalue.service_img}
                onChange={getform}
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="status"
                className="form-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#6c757d",
                }}
              >
                Status
              </label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={formvalue.status}
                onChange={getform}
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              >
                <option>Accept</option>
                <option>Reject</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-5"
              style={{
                borderRadius: "10px",
                fontSize: "20px",
                backgroundColor: "yellow",
                color: "black",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_services;
