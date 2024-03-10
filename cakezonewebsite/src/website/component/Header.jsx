import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("uname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-envelope fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-primary border-inner py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <i className="fa fa-birthday-cake fs-1 text-dark me-3" />
                  CakeZone
                </h1>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
            CakeZone
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto ">
            <NavLink to="/" className="nav-item nav-link active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About Us
            </NavLink>
            <NavLink to="/menu" className="nav-item nav-link">
              Menu &amp; Pricing
            </NavLink>
            <NavLink to="/team" className="nav-item nav-link">
              Master Chefs
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="/service" className="dropdown-item">
                  Our Service
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item">
                  Testimonial
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/feedback" className="nav-item nav-link">
              Feedback
            </NavLink>
            {(() => {
              //  Use  session
              if (localStorage.getItem("userid")) {
                return (
                  <NavLink to="/profile" className="nav-item nav-link">
                    Hi .. {localStorage.getItem("uname")}
                  </NavLink>
                );
              }
            })()}
          </div>
          {(() => {
            if (localStorage.getItem("userid")) {
              return (
                <>
                  <a
                    href="javascript:void(0)"
                    onClick={logout}
                    className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                  >
                    Logout
                  </a>
                </>
              );
            } else {
              return (
                <>
                  <Link
                    to="/login"
                    className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block text-light me-5"
                    style={{ backgroundColor: "#E88F2A" }}
                  >
                    Login
                  </Link>
                </>
              );
            }
          })()}
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

export default Header;
