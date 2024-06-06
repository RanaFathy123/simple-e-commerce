import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div
      className="d-flex align-items-center w-100"
      style={{
        background:
          "url(https://male-fashion-ten.vercel.app/static/media/hero-1.c081bcff664751bf4f02.jpg) top right 60% no-repeat",
        minHeight: "50em",
      }}
    >
      <div className="container" style={{ height: "calc(20em)" }}>
        <div
          className=" titelIn d-flex flex-column align-items-start justify-content-evenly"
          data-wow-duration="2s"
          style={{ height: "100%", maxWidth: "27rem" }}
        >
          <h6 className="text-uppercase fw-bolder fw-bold text-danger">
            Summer Collection
          </h6>
          <h2 style={{ fontSize: "48px" }}>Fall - Winter Collections 2023</h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link
            className="text-uppercase text-white bg-danger text-decoration-none"
            to="/shop"
            style={{
              padding: "15px 40px",
              letterSpacing: "4px",
              fontWeight: 700,
            }}
          >
            Shop now
            <span className="ms-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection