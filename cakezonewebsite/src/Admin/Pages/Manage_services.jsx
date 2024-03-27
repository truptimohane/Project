import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Manage_services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  // Fetch Data from API
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/services`);
    console.log(res.data);
    setData(res.data); // set data from API in data var state
  };

  // Delete
  const deleteHandel = async (id) => {
    await axios.delete(`http://localhost:3000/services/${id}`);
    fetch();
  };

  // status
  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
    if (res.data.status === "Block") {
      const res2 = await axios.patch(`http://localhost:3000/services/${id}`, {
        status: "Unblock",
      });
      if (res2.status === 200) {
        toast.success("Status Unblock success");
        fetch();
      }
    } else {
      const res2 = await axios.patch(`http://localhost:3000/services/${id}`, {
        status: "Block",
      });
      if (res2.status === 200) {
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
    catg_id: "",
    price: "",
    service_img: "",
    service_name: "",
    service_desc: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.catg_id == "") {
      toast.error("catg_id Field is required");
      result = false;
      return false;
    }
    if (formvalue.price == "") {
      toast.error("price Field is required");
      result = false;
      return false;
    }
    if (formvalue.service_img == "") {
      toast.error("service_img Field is required");
      result = false;
      return false;
    }
    if (formvalue.service_name == "") {
      toast.error("service_name Field is required");
      result = false;
      return false;
    }
    if (formvalue.service_desc == "") {
      toast.error("service_desc Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/services/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          id: "",
          catg_id: "",
          price: "",
          service_img: "",
          service_name: "",
          service_desc: "",
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
                Manage Products
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
                          <th>ID</th>
                          <th>Categories ID</th>
                          <th>Service Name</th>
                          <th>Service's Description</th>
                          <th>Price</th>
                          <th>Service Img</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((value, index, arr) => {
                          return (
                            <tr className="odd gradeX">
                              <td>{value.id}</td>
                              <td>{value.catg_id}</td>
                              <td>{value.service_name}</td>
                              <td>{value.service_desc}</td>
                              <td>{value.price}</td>
                              <td>
                                <img
                                  src={value.service_img}
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
                                          Edit Services
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
                                              <div className="col-md-6">
                                                <div className="form-floating">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="catg_id"
                                                    value={formvalue.catg_id}
                                                    onChange={getform}
                                                    id="catg_id"
                                                  />
                                                  <label htmlFor="name">
                                                    Categorie's ID
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-6">
                                                <div className="form-floating">
                                                  <input
                                                    type="number"
                                                    className="form-control"
                                                    name="price"
                                                    value={formvalue.price}
                                                    onChange={getform}
                                                    id="price"
                                                    placeholder="Enter Categories Name"
                                                  />
                                                  <label htmlFor="Type">
                                                    Price
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="url"
                                                    className="form-control"
                                                    name="service_img"
                                                    value={
                                                      formvalue.service_img
                                                    }
                                                    onChange={getform}
                                                    id="service_img"
                                                    placeholder="Enter Categories Name"
                                                  />
                                                  <label htmlFor="Type">
                                                    Service's Image
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="service_name"
                                                    value={
                                                      formvalue.service_name
                                                    }
                                                    onChange={getform}
                                                    id="service_name"
                                                    placeholder="Enter Categories Name"
                                                  />
                                                  <label htmlFor="Type">
                                                    Service's Name
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="service_desc"
                                                    value={
                                                      formvalue.service_desc
                                                    }
                                                    onChange={getform}
                                                    id="service_desc"
                                                    placeholder="Enter Categories Name"
                                                  />
                                                  <label htmlFor="Type">
                                                    Service's desc
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

export default Manage_services;
