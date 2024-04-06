import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer3 from "../component/Footer3";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/blog`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Header />
      {/* Blog Start */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-primary">Latest Blog Posts</h2>
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ borderRadius: "10px" }}
        >
          {/* Blog list Start */}
          {data.map((value, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img
                  src={value.image}
                  className="card-img-top"
                  alt={value.title}
                />
                <div className="card-body">
                  <h2 className="card-title">
                    {value.title} :<span>Chocolate Cream Cake</span>
                  </h2>
                  <p className="card-text">{value.date}</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Blog list End */}
        </div>
      </div>
      {/* Blog End */}
      <Footer3 />
    </div>
  );
}

export default Blog;
