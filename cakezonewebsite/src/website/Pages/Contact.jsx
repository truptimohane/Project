import React, { useState } from "react";
import Header from "../component/Header";
import Footer2 from "../component/Footer2";
import axios from "axios";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    comment: "",
    status: "",
    catg_name: "",
    catg_img: "",
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
    const res = await axios.post(`http://localhost:3000/contact`, formvalue);
    console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        name: "",
        email: "",
        subject: "",
        comment: "",
        status: "",
        catg_name: "",
        catg_img: "",
      });
      alert("Contact's details submited success");
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
            <h1 className="display-4 text-uppercase text-white">Contact Us</h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Contact</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div
        className="container-fluid contact position-relative px-5"
        style={{ marginTop: 90 }}
      >
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-geo-alt fs-1 text-white" />
                <h6 className="text-uppercase my-2">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-envelope-open fs-1 text-white" />
                <h6 className="text-uppercase my-2">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-phone-vibrate fs-1 text-white" />
                <h6 className="text-uppercase my-2">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form role="form" action="" method="post" onSubmit={submithandel}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      id="name"
                      name="name"
                      style={{ height: 55 }}
                      value={formvalue.name}
                      onChange={getform}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formvalue.email}
                      onChange={getform}
                      required
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      style={{ height: 55 }}
                      value={formvalue.subject}
                      onChange={getform}
                      required
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows={4}
                      placeholder="Message"
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
      <Footer2 />
    </div>
  );
}

export default Contact;
