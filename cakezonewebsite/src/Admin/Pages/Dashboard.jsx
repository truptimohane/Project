import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../component/AdminHeader";
import AdminFooter from "../component/AdminFooter";

function Dashboard() {
  const redirect = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      fetch();
    } else {
      redirect("/admin-login");
    }
  }, []);

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/admin/${localStorage.getItem("adminid")}`
    );
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  };

  return (
    <div>
      <AdminHeader />
      {/* Facts Start */}
      <div
        className="container-fluid  "
        style={{ padding: 0, backgroundColor: "lightgreen", marginTop: 0 }}
      >
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-6 mb-5">
              <div className="bg-primary border-inner text-center text-white p-5">
                <div className="d-flex">
                  <div
                    className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3  text-center text-white "
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-star text-white " />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-light text-uppercase">
                      Our Experience
                    </h6>
                    <h1
                      className="display-5 mb-0"
                      data-toggle="counter-up"
                      style={{ color: "black" }}
                    >
                      15635
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="bg-primary border-inner text-center text-white p-5">
                <div className="d-flex">
                  <div
                    className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-users text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase text-light">
                      Cake Specialist
                    </h6>
                    <h1
                      className="display-5  mb-0"
                      data-toggle="counter-up"
                      style={{ color: "black" }}
                    >
                      75421
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 mb-5">
              <div className="bg-primary border-inner text-center text-white p-5">
                <div className="d-flex">
                  <div
                    className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase text-light">
                      Complete Project
                    </h6>
                    <h1
                      className="display-5  mb-0"
                      data-toggle="counter-up"
                      style={{ color: "black" }}
                    >
                      12340
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="bg-primary border-inner text-center text-white p-5">
                <div className="d-flex">
                  <div
                    className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-mug-hot text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase text-light">
                      Happy Clients
                    </h6>
                    <h1
                      className="display-5  mb-0"
                      data-toggle="counter-up"
                      style={{ color: "black" }}
                    >
                      12845
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      <AdminFooter />
    </div>
  );
}

export default Dashboard;
