import axios from "axios";
import React, { useState, useEffect } from "react";

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
                                <button class="btn btn-success">Edit</button>
                                <button
                                  class="btn btn-danger"
                                  onClick={() => deleteHandel(value.id)}
                                >
                                  Delete
                                </button>
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
