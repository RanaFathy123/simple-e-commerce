import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ userLogged }) => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={userLogged?.image}
            />
            <span className="fw-bold fs-6 text-success">
              {userLogged?.firstname}
            </span>
            <span className="text-black-50">
              UserName : {userLogged?.username}
            </span>
            <span>
              {`My First Name is ${userLogged?.firstname} and My Last Name is ${userLogged?.lastname}`}{" "}
            </span>
            <span>
              {`Iam ${userLogged?.gender} and Iam ${userLogged?.role} in this site`}{" "}
            </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right mb-2 text-secondary">My Profile</h4>
            </div>
            <hr className="border border-success border-2 opacity-50" />
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels mb-2">Full Name</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  value={`${userLogged?.firstname} ${userLogged?.lastname}`}
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label className="labels mb-2">Email</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  value={`${userLogged?.email}`}
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label className="labels mb-2">Gender</label>
                <select className="form-control mb-4">
                  <option>{userLogged?.gender}</option>
                </select>
              </div>
              <div className="col-md-12">
                <label className="labels mb-2">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={`${userLogged?.username}`}
                  disabled
                  readOnly
                />
                <div className="text-secondary m-2">
                  You can't Change User Name
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Link to={`/edit/userprofile/${userLogged.id}`}>
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
