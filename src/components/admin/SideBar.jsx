import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    
    <div className="col-md-2 bg-black ">
      <div className="d-flex flex-column" style={{ height: "100%" }}>
        <ul className="nav flex-grow-1 flex-column justify-content-evenly align-items-center">
          <li className="nav-item">
            <Link className="nav-link fw-bold fs-6" to="/admin">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold fs-6" to="/admin/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold fs-6" to="/admin/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
