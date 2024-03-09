import React from "react";
import Header from "../component/Header";
import Footer3 from "../component/Footer3";

function Service() {
  return (
    <div>
      <Header />
      {/* Service Start */}
      <div>
        {/* Page Header Start */}
        <div className="container-fluid bg-dark bg-img p-5 mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 text-uppercase text-white">Services</h1>
              <a href>Home</a>
              <i className="far fa-square text-primary px-2" />
              <a href>Services</a>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Service Start */}
        <div
          className="container-fluid service position-relative px-5"
          style={{ marginTop: 90 }}
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="bg-primary border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Birthday Cake</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                    stet sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg-primary border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Wedding Cake</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                    stet sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg-primary border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Custom Cake</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                    stet sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 text-center">
                <h1 className="text-uppercase text-light mb-4">
                  30% Discount For This Summer
                </h1>
                <a href className="btn btn-primary border-inner py-3 px-5">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Service Start */}
      </div>

      {/* Service Start */}
      <Footer3 />
    </div>
  );
}

export default Service;
