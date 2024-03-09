import React, { useState } from "react";
import axios from "axios";

function Add_emp() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
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
    const res = await axios.post(`http://localhost:3000/employee`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: "",
        status: "",
      });
      alert("Employee's details submited success");
      return false;
    }
  };

  return (
    <div>
      <div
        className="admin-panel"
        style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
      >
        <h1 className="text-center mt-5 text-primary">Add Employee</h1>
        <div className="container">
          <form role="form" action="" method="post" onSubmit={submithandel}>
            <div className="mb-3">
              <label
                className="form-label text-danger"
                style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formvalue.name}
                onChange={getform}
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label text-success"
                style={{ fontSize: "18px", fontWeight: "bold", color: "green" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formvalue.email}
                onChange={getform}
                required
                placeholder="Enter email"
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label text-info"
                placeholder="Enter password"
                style={{ fontSize: "18px", fontWeight: "bold", color: "blue" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formvalue.password}
                onChange={getform}
                required
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ffc107",
                }}
              >
                Mobile No.
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formvalue.mobile}
                onChange={getform}
                required
                placeholder="Enter mobile number"
                style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#33FFCA",
                }}
              >
                Image
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="img"
                value={formvalue.img}
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
                style={{ borderRadius: "10px", border: "1px solid #582E72" }}
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

export default Add_emp;
