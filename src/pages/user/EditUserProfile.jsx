import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUserProfile = ({ userLogged, ifUserChanged, setIfUserChanged }) => {
  const { userId } = useParams();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const selectGender = useRef();
  const navigate = useNavigate();

  const changeInputsValues = () => {
    firstName.current.value = userLogged?.firstname;
    lastName.current.value = userLogged?.lastname;
    email.current.value = userLogged?.email;
    password.current.value = userLogged?.password;
  };
  const editProfile = () => {
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${userId}`,
      data: {
        firstname: firstName.current.value,
        lastname: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        gender: selectGender.current.value,
      },
    })
      .then((response) => response.data)
      .catch((err) => console.log(err));
    setIfUserChanged(!ifUserChanged);
    navigate("/profile");
  };
  useEffect(() => {
    changeInputsValues();
  }, [userLogged]);
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
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="fw-bold">My Profile is ready to change...</span>
            </div>
            <hr className="border border-success border-2 opacity-50" />
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels mb-2">First Name</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  ref={firstName}
                />
              </div>
              <div className="col-md-12">
                <label className="labels mb-2">Last Name</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  ref={lastName}
                />
              </div>
              <div className="col-md-12">
                <label className="labels mb-2">Email</label>
                <input type="text" className="form-control mb-4" ref={email} />
              </div>

              <div className="col-md-12">
                <label className="labels mb-2">Password</label>
                <input
                  type="password"
                  className="form-control mb-4"
                  ref={password}
                />
              </div>
            </div>
            <div className="col-md-12">
              <label className="labels mb-2">Gender</label>
              <select className="form-select" ref={selectGender}>
                <option defaultValue>{userLogged?.gender}</option>
                <option>
                  {userLogged?.gender == "male" ? "female" : "male"}
                </option>
              </select>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                type="button"
                onClick={editProfile}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
