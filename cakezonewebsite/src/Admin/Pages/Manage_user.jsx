import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Manage_user() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  // Fetch Data from API
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setData(res.data); // set data from API in data var state
  };

  // Delete
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
  };

  // Stutus
  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if (res.data.status == "Block") {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Unblock",
      });
      if (res.status == 200) {
        toast.success("Status Unblock success");
        fetch();
      }
    } else {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Block",
      });
      if (res.status == 200) {
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        toast.success("Status Block success");
        fetch();
      }
    }
  };

  // Edit Data
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }
    if (formvalue.password == "") {
      toast.error("Password Field is required");
      result = false;
      return false;
    }
    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required");
      result = false;
      return false;
    }
    if (formvalue.img == "") {
      toast.error("Image Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
          img: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#BB9476" }}>
      <div className="content-wrapper pt-5">
        <div className="container ">
          <div className="row pad-botm">
            <div className="col-md-12 text-center">
              <h4
                className="header-line"
                style={{
                  color: "#900C3F",
                  fontSize: "40px",
                }}
              >
                Manage User
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive mt-5 mb-5">
                    <table
                      className="table table-striped table-bordered table-hover text-light"
                      id="dataTables-example"
                      style={{
                        borderRadius: "10px",
                        borderCollapse: "collapse",
                      }}
                    >
                      <thead className="text-light">
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Mobile No.</th>
                          <th>Image</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((value, index, arr) => {
                          return (
                            <tr className="odd gradeX">
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>{value.password}</td>
                              <td>{value.mobile}</td>
                              <td>
                                <img
                                  src={value.img}
                                  alt=""
                                  srcset=""
                                  style={{
                                    maxWidth: "100px",
                                    maxHeight: "100px",
                                  }}
                                />
                              </td>
                              <td>
                                <button
                                  class="btn btn-success"
                                  onClick={() => statusHandle(value.id)}
                                >
                                  {value.status}
                                </button>
                              </td>
                              <td>
                                <button
                                  class="btn btn-success"
                                  onClick={() => editdata(value.id)}
                                  data-bs-toggle="modal"
                                  data-bs-target="#myModal"
                                >
                                  Edit
                                </button>
                                <button
                                  class="btn btn-danger"
                                  onClick={() => deleteHandel(value.id)}
                                >
                                  Delete
                                </button>
                                <div className="modal" id="myModal">
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      {/* Modal Header */}
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Edit User
                                        </h4>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                        />
                                      </div>
                                      {/* Modal body */}
                                      <div className="modal-body">
                                        <div className="container">
                                          <form action="" method="post">
                                            <div className="row g-3">
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={formvalue.name}
                                                    onChange={getform}
                                                    id="name"
                                                    placeholder="Enter Your Name"
                                                  />
                                                  <label htmlFor="name">
                                                    Name
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formvalue.email}
                                                    onChange={getform}
                                                    id="email"
                                                    placeholder="Enter Your Email"
                                                  />
                                                  <label htmlFor="Type">
                                                    Email
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="password"
                                                    className="form-control"
                                                    name="Password"
                                                    value={formvalue.password}
                                                    onChange={getform}
                                                    id="Password"
                                                    placeholder="Enter Your Password"
                                                  />
                                                  <label htmlFor="Type">
                                                    Password
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="mobile"
                                                    value={formvalue.mobile}
                                                    onChange={getform}
                                                    id="mobile"
                                                    placeholder="Enter Your Mobile"
                                                  />
                                                  <label htmlFor="Type">
                                                    Mobile
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="url"
                                                    className="form-control"
                                                    name="img"
                                                    value={formvalue.img}
                                                    onChange={getform}
                                                    id="img"
                                                    placeholder="Enter Image"
                                                  />
                                                  <label htmlFor="Type">
                                                    Image
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-12">
                                                <button
                                                  onClick={submithandel}
                                                  data-bs-dismiss="modal"
                                                  className="btn btn-primary w-100 py-3"
                                                  type="submit"
                                                >
                                                  Save
                                                </button>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                      {/* Modal footer */}
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_user;
