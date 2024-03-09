import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer2 from "../component/Footer2";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      redirect("/");
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
    status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Unblock",
      [e.target.name]: e.target.value,
    });
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
      const res = await axios.post(`http://localhost:3000/user`, formvalue);
      //console.log(res);
      if (res.status == 201) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
          img: "",
        });
        toast.success("Signup success");
        return false;
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5">Signup For services</h1>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-7 border bg-dark"
              style={{ borderRadius: 20 }}
            >
              <h3 className=" justify-content-center text-center text-primary mt-5">
                <span />
                Signup Us
                <span />
              </h3>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form action="" method="post" onSubmit={submithandel}>
                  <div className="row g-3 m-5 ">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formvalue.name}
                          onChange={getform}
                          id="name"
                          placeholder="Your Name"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formvalue.email}
                          onChange={getform}
                          id="email"
                          placeholder="Your Email"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formvalue.password}
                          onChange={getform}
                          id="password"
                          placeholder="Your Password"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="email">Your Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          name="mobile"
                          value={formvalue.mobile}
                          onChange={getform}
                          id="mobile"
                          placeholder="Your Mobile"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="email">Your Mobile</label>
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
                          placeholder="Your Image"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="email">Your Image</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        style={{ borderRadius: 15 }}
                      >
                        Signup
                      </button>
                      <Link to="/login">
                        If you already Registered then Login Here
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Signup;
