import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminHeader() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    toast.success("Logout Success");
    redirect("/admin-login");
  };
  return (
    <div>
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
              ADMIN DASHBOARD
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
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-lg-auto py-0">
              {/* <NavLink to="/admin-login" className="nav-item nav-link ">
                Admin Login
              </NavLink> */}
              <NavLink
                to="/admin-dashboard"
                className="nav-item nav-link active"
              >
                Admin Dashbaoard
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/add-categories" className="dropdown-item">
                    Add Categories
                  </NavLink>
                  <NavLink to="/manage-categories" className="dropdown-item">
                    Manage Categories
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Chef
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/add-chef" className="dropdown-item">
                    Add Chef
                  </NavLink>
                  <NavLink to="/manage-chef" className="dropdown-item">
                    Manage Chef
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/add-blog" className="dropdown-item">
                    Add blog
                  </NavLink>
                  <NavLink to="/manage-blog" className="dropdown-item">
                    Manage blog
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/add-products" className="dropdown-item">
                    Add Products
                  </NavLink>
                  <NavLink to="/manage-products" className="dropdown-item">
                    Manage Products
                  </NavLink>
                </div>
              </div>
              <NavLink to="/manage-user" className="nav-item nav-link">
                User
              </NavLink>
              <NavLink to="/manage-contact" className="nav-item nav-link">
                Contact
              </NavLink>
              <NavLink to="/manage_feedback" className="nav-item nav-link">
                Feedback
              </NavLink>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                {(() => {
                  if (localStorage.getItem("adminid")) {
                    return (
                      <>
                        <a
                          href="javascript:void(0)"
                          onClick={logout}
                          className="btn mt-3 ms-3  d-none d-lg-block"
                          style={{
                            backgroundColor: "#E88F2A",
                            borderRadius: "50%",
                            color: "white",
                            padding: "10px 15px",
                            fontSize: "18px",
                          }}
                        >
                          Logout
                        </a>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <Link
                          to="/admin-login"
                          className="btn  rounded-0 py-4 px-lg-5 d-none d-lg-block"
                        >
                          LOG IN
                        </Link>
                      </>
                    );
                  }
                })()}

                {/* <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute  "
                  >
                    SignUp
                  </button> */}
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
      </div>
    </div>
  );
}

export default AdminHeader;
