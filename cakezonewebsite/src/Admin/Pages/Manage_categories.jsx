import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Manage_categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  // Fetch Data from API
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data); // set data from API in data var state
  };

  // Delete
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  };

  // Edit Data
  const [formvalue, setFormvalue] = useState({
    id: "",
    catg_name: "",
    catg_img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.catg_name == "") {
      toast.error("catg_name Field is required");
      result = false;
      return false;
    }
    if (formvalue.catg_img == "") {
      toast.error("catg_img Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/categories/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          catg_name: "",
          catg_img: "",
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
                Manage Categories
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
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Categories Name</th>
                          <th>Categories Image</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((value, index, arr) => {
                          return (
                            <tr className="odd gradeX">
                              <td>{value.id}</td>
                              <td>{value.catg_name}</td>
                              <td>
                                <img
                                  src={value.catg_img}
                                  alt=""
                                  srcset=""
                                  style={{ height: "100px", width: "100px" }}
                                />
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
                                          Edit Categories
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
                                                    name="catg_name"
                                                    value={formvalue.catg_name}
                                                    onChange={getform}
                                                    id="catg_name"
                                                    placeholder="Enter Your Categories"
                                                  />
                                                  <label htmlFor="name">
                                                    Categories
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-12">
                                                <div className="form-floating">
                                                  <input
                                                    type="url"
                                                    className="form-control"
                                                    name="catg_img"
                                                    value={formvalue.catg_img}
                                                    onChange={getform}
                                                    id="catg_img"
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

export default Manage_categories;
