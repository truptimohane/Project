import React, { useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer3 from "../component/Footer3";

function Feedback() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    comment: "",
    status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
      status: "Available",
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/feedback`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        name: "",
        email: "",
        comment: "",
        status: "",
      });
      alert("feedback's details submited success");
      return false;
    }
  };
  return (
    <div>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Feedback</h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Feedback</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div
        className="container-fluid contact position-relative px-5"
        style={{ marginTop: -180 }}
      >
        <div className="container">
          <div
            className="row justify-content-center position-relative "
            style={{ paddingTop: 170 }}
          >
            <div className="col-lg-6">
              <form role="form" action="" method="post" onSubmit={submithandel}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      id="name"
                      name="name"
                      value={formvalue.name}
                      onChange={getform}
                      required
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formvalue.email}
                      onChange={getform}
                      required
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-sm-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows={4}
                      placeholder="Comment"
                      defaultValue={""}
                      id="comment"
                      name="comment"
                      value={formvalue.comment}
                      onChange={getform}
                      required
                    />
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      <Footer3 />
    </div>
  );
}

export default Feedback;
