import React from "react";
import footerLogo from "../images/FooterLogo.png";
import footerPayment from "../images/FooterPayment.png";
import footer1 from "../images/footer-partener-1.png";
import footer2 from "../images/fotter-partner-2.png";
import footer3 from "../images/footer-partner-3png.png";
import footer4 from "../images/footer-partner-4png.png";
import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

const Footer = () => {
  return (
    <div className="bg-black pt-5 text-footer overflow-hidden h-100 ">
      <div className="container my-3">
        <div className="row px-lg-0 px-3 mb-5 gap-lg-0 gap-4 g flex-lg-row flex-column justify-content-between ">
          <div className="row gap-4 col-lg-3 col-9">
            <div className="p-0 col-9">
              <img src={footerLogo} alt="" />
            </div>
            <div className="px-0 col-12">
              <p className="text-white">
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <div className="p-0 col-9">
                <img className="w-100" src={footerPayment} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-4">
            <div className="px-0 col-12">
              <h5 className="text-white">SHOPPING</h5>
            </div>
            <div className="p-0 col-9">
              <ul className="list-footer list-unstyled">
                <li>
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="nav-link text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <a href="" className="nav-link text-white">
                    About Us{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row gap-3 align-content-center col-lg-2 col-5">
            <h5 className="text-white">PARTNER</h5>
            <div className="d-flex gap-5 justify-content-center px-3 ">
              <img src={footer1} alt="" />
              <img src={footer2} alt="" />
            </div>
            <div className="d-flex gap-5 justify-content-center">
              <img src={footer3} alt="" />
              <img src={footer4} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-7">
            <h5 className=" text-white">NEWLETTER</h5>
            <p className="text-white">
              Be the first to know about new arrivals, look books, sales &amp;
              promos!
            </p>
            <EmailForm />
          </div>
          <div className="border-top border-dark pt-3 text-center mt-5 ">
            <p className="text-white">Copyright © 2023 &amp; 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
