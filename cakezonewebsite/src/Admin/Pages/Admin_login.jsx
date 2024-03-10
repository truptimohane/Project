import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Admin_login() {
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      redirect("/admin-login");
    }
  }, []);

  const redirect = useNavigate(); // redirect any routes

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
        `http://localhost:3000/admin?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          // create session
          localStorage.setItem("adminid", res.data[0].id);
          localStorage.setItem("adminname", res.data[0].name);

          toast.success("Login Success");
          redirect("/admin-dashboard");
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
    <div className="content-wrapper">
      <style>
        {`
          body {
            background-color: black; /* Specify your desired color value */
          }
        `}
      </style>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {" "}
          {/* Centering the row */}
          <div className="col-md-6">
            <div className="row pad-botm">
              <div className="col-md-12">
                <h4 className="header-line text-center text-light">
                  Admin Login
                </h4>{" "}
                {/* Centering the heading */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-dark">
                  <form action="" method="post" onSubmit={submithandel}>
                    <div className="mb-3 mt-3">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={formvalue.email}
                        onChange={getform}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pwd" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="password"
                        value={formvalue.password}
                        onChange={getform}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                      {" "}
                      {/* Making the button full-width */}
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_login;
