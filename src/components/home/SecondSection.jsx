import React from "react";

const SecondSection = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row gap-5 justify-content-center banner">
        <div className="hover-banner position-relative col-lg-7 col-10 offset-lg-4 mt-3 d-lg-flex justify-content-lg-end">
          <div className="banner-img">
            <img
              src="https://male-fashion-ten.vercel.app/static/media/banner-1.45fe2b268cef81900571.jpg"
              alt=""
              style={{width: "100%"}}
            />
          </div>
          <div >
            <h1>Clothing Collections 2023</h1>
            <a
              className="text-decoration-none position-relative text-black"
              href="/Shop"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        <div
          className="col-lg-5 col-10 hover-banner position-lg-relative banner-margin"
          style={{marginTop: '5rem'}}
        >
          <div >
            <img
              src="https://male-fashion-ten.vercel.app/static/media/banner-2.09aec17ea3a36d2e2a44.jpg"
              alt=""
              style={{width: "100%"}}
            />
          </div>
          <div>
            <h1>Accessories</h1>
            <a
              className="text-decoration-none position-relative text-black"
              href="/Shop"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-10 hover-banner position-relative">
          <div className=" float-lg-end">
            <img
              src="https://male-fashion-ten.vercel.app/static/media/banner-3.902e072bfedc4a1cabdf.jpg"
              alt=""
              style={{width: "100%"}}
            />
          </div>
          <div >
            <h1>Shoes Spring 2023</h1>
            <a
              className="text-decoration-none position-relative text-black"
              href="/Shop"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
