import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../component/Header";
import Footer2 from "../component/Footer2";

function Login() {
  const redirect = useNavigate(); // redirect any routes

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      redirect("/");
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;

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
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/user?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          // create session
          localStorage.setItem("userid", res.data[0].id);
          localStorage.setItem("uname", res.data[0].name);

          toast.success("Login Success");
          redirect("/");
        } else {
          toast.error("Password incorrect");
          return false;
        }
      } else {
        toast.error("Email does not Exist");
        return false;
      }
    }
  };
  return (
    <div>
      <Header />
      {/* Login Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5">Login For Services</h1>
          </div>

          <div className="row justify-content-center team-item bg-light rounded">
            <div
              className="col-lg-7 border bg-dark"
              style={{ borderRadius: 20 }}
            >
              <h3 className="text-primary justify-content-center text-center m-5">
                <span />
                Login Us
                <span />
              </h3>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form action="" method="post" onSubmit={submithandel}>
                  <div className="row g-3 m-5 ">
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
                          id="email"
                          placeholder="Your Email"
                          style={{ borderRadius: 15 }}
                        />
                        <label htmlFor="email">Your Password</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        style={{ borderRadius: 15 }}
                      >
                        Login
                      </button>
                      <Link to="/signup">
                        If you not Registered then Register Here
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
      <Footer2 />
    </div>
  );
}

export default Login;
