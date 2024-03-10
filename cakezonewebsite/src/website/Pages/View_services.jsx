import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer2 from "../component/Footer2";
import { useNavigate, useParams } from "react-router-dom";

function View_services() {
  const redirect = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const { cate_id } = useParams();
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/services?catg_id=${cate_id}`
    );
    console.log(res.data);
    setData(res.data);
  };
  return (
    <div>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">
              Menu &amp; Pricing
            </h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Menu &amp; Pricing</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Products Start */}
      <div className="container-fluid about py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: 600 }}
          >
            <h2 className="text-primary font-secondary">Menu &amp; Pricing</h2>
            <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
          </div>
          <div className="row g-4">
            {data.map((value, index, arr) => {
              return (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="card">
                      <img
                        src={value.service_img}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "300px" }}
                      />
                      <div className="card-body">
                        {/* <h5 className="card-title text-primary">
                          {value.catg_id} : {value.id}
                        </h5> */}
                        <h3
                          className="card-title text-success"
                          style={{ opacity: 0.7 }}
                        >
                          {value.service_name}
                        </h3>
                        <h5 className="card-title text-info">
                          {value.service_desc}
                        </h5>
                        <h5 className="mb-3">
                          {" "}
                          <span>Rs.</span>
                          {value.price} <span>Only/-</span>
                        </h5>
                        <a
                          className="btn btn-square"
                          onClick={() => redirect("/view_service/" + value.id)}
                          href="javascript:void(0)"
                        >
                          <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Products End */}
      {/* Offer Start */}
      <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-3"
                style={{ maxWidth: 600 }}
              >
                <h2 className="text-primary font-secondary">
                  Special Kombo Pack
                </h2>
                <h1 className="display-4 text-uppercase text-white">
                  Super Crispy Cakes
                </h1>
              </div>
              <p className="text-white mb-4">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </p>
              <a href className="btn btn-primary border-inner py-3 px-5 me-3">
                Shop Now
              </a>
              <a href className="btn btn-dark border-inner py-3 px-5">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}
      <Footer2 />
    </div>
  );
}

export default View_services;
