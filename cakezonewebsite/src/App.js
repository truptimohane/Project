import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./website/Pages/Home";
import About from "./website/Pages/About";
import Menu from "./website/Pages/Menu";
import Team from "./website/Pages/Team";
import Service from "./website/Pages/Service";
import Testimonial from "./website/Pages/Testimonial";
import Contact from "./website/Pages/Contact";
import Blog from "./website/Pages/Blog";
import Feedback from "./website/Pages/Feedback";
import Login from "./website/Pages/Login";
import Profile from "./website/Pages/Profile";
import Signup from "./website/Pages/Signup";
import PNF from "./website/Pages/PNF";

// Adminside
import Admin_login from "./Admin/Pages/Admin_login";
import Dashboard from "./Admin/Pages/Dashboard";
import AdminHeader from "./Admin/component/AdminHeader";
import AdminFooter from "./Admin/component/AdminFooter";
import Add_categories from "./Admin/Pages/Add_categories";
import Manage_categories from "./Admin/Pages/Manage_categories";
import Add_services from "./Admin/Pages/Add_services";
import Manage_services from "./Admin/Pages/Manage_services";
import Manage_user from "./Admin/Pages/Manage_user";
import Manage_contact from "./Admin/Pages/Manage_contact";
import View_services from "./website/Pages/View_services";
import Manage_feedback from "./Admin/Pages/Manage_feedback";
import Add_chefs from "./Admin/Pages/Add_chefs";
import Manage_chefs from "./Admin/Pages/Manage_chefs";
import Add_blog from "./Admin/Pages/Add_blog";
import Manage_blog from "./Admin/Pages/Manage_blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/menu"
            element={
              <>
                <Menu />
              </>
            }
          ></Route>
          <Route
            path="/team"
            element={
              <>
                <Team />
              </>
            }
          ></Route>
          <Route
            path="/service"
            element={
              <>
                <Service />
              </>
            }
          ></Route>
          <Route
            path="/testimonial"
            element={
              <>
                <Testimonial />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <>
                <Blog />
              </>
            }
          ></Route>
          <Route
            path="/feedback"
            element={
              <>
                <Feedback />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <PNF />
              </>
            }
          ></Route>
          <Route
            path="/view_service/:cate_id"
            element={
              <>
                <View_services />
              </>
            }
          ></Route>

          {/* admin */}
          <Route
            path="/admin-login"
            element={
              <>
                <Admin_login />
              </>
            }
          ></Route>
          <Route
            path="/admin-dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
          <Route
            path="/add-categories"
            element={
              <>
                <AdminHeader />
                <Add_categories />
                <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-categories"
            element={
              <>
                {" "}
                <AdminHeader /> <Manage_categories /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/add-chef"
            element={
              <>
                {" "}
                <AdminHeader /> <Add_chefs /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-chef"
            element={
              <>
                {" "}
                <AdminHeader /> <Manage_chefs /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/add-blog"
            element={
              <>
                {" "}
                <AdminHeader /> <Add_blog /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-blog"
            element={
              <>
                {" "}
                <AdminHeader /> <Manage_blog /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/add-products"
            element={
              <>
                {" "}
                <AdminHeader /> <Add_services /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-products"
            element={
              <>
                {" "}
                <AdminHeader /> <Manage_services /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-user"
            element={
              <>
                {" "}
                <AdminHeader /> <Manage_user /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-contact"
            element={
              <>
                <AdminHeader /> <Manage_contact /> <AdminFooter />
              </>
            }
          ></Route>
          <Route
            path="/manage_feedback"
            element={
              <>
                <AdminHeader />
                <Manage_feedback />
                <AdminFooter />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
