import React, { useState } from "react";
import axios from "axios";

function Add_chefs() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    designation: "",
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
    const res = await axios.post(`http://localhost:3000/chefs`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({ ...formvalue, name: "", designation: "" });
      alert("Chef's details submited success");
      return false;
    }
  };
  return (
    <div>
      <div>
        <div
          className="admin-panel"
          style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
        >
          <h1 className="text-center mt-5 text-primary">Add Chef</h1>
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
                  className="form-label"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "green",
                  }}
                >
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  name="designation"
                  value={formvalue.designation}
                  onChange={getform}
                  required
                  style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label "
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  Image
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="img"
                  name="img"
                  value={formvalue.img}
                  onChange={getform}
                  required
                  style={{ borderRadius: "10px", border: "1px solid #ced4da" }}
                />
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
    </div>
  );
}

export default Add_chefs;
