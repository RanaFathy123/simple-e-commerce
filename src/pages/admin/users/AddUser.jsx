import React, { useRef, useState } from "react";
import SideBar from "../../../components/admin/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = ({ ifUserChanged, setIfUserChanged }) => {
  const [addUserMessage, setAddUserMessage] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    city: "",
    phoneNumber: "",
  });
  const [checkFirstName, setCheckFirstName] = useState(false);
  const [checkLastName, setCheckLastName] = useState(false);
  const [checkUserName, setCheckUserName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkCity, setCheckCity] = useState(false);
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const city = useRef();
  const selectGender = useRef();
  const phoneNumber = useRef();
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      const response = axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          firstname: firstName.current.value,
          lastname: lastName.current.value,
          username: userName.current.value,
          email: email.current.value,
          password: password.current.value,
          image:
            selectGender.current.value == "male"
              ? "https://www.svgrepo.com/show/382107/male-avatar-boy-face-man-user-6.svg"
              : "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
          city: city.current.value,
          phonenumber: phoneNumber.current.value,
          gender: selectGender.current.value,
          role: "member",
        },
      });
    } catch (err) {
      console.log(err);
    }
    setIfUserChanged(!ifUserChanged);
  };
  const resetInputs = () => {
    setCheckFirstName(false);
    setCheckLastName(false);
    setCheckUserName(false);
    setCheckEmail(false);
    setCheckPassword(false);
    setCheckCity(false);
    setCheckPhoneNumber(false);
  };
  const validateInputs = () => {
    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (firstName.current.value == "") {
      setCheckFirstName(true);
      setAddUserMessage({
        ...addUserMessage,
        firstName: "Please Fill First Name",
      });
    } else if (firstName.current.value.length <= 2) {
      setCheckFirstName(true);
      setAddUserMessage({
        ...addUserMessage,
        firstName: "First Name Must Be More Than 2 Charcters",
      });
    } else if (lastName.current.value == "") {
      resetInputs();
      setCheckLastName(true);
      setAddUserMessage({
        ...addUserMessage,
        lastName: "Please Fill Last Name",
      });
    } else if (lastName.current.value.length <= 2) {
      resetInputs();
      setCheckLastName(true);
      setAddUserMessage({
        ...addUserMessage,
        lastName: "Last Name Must Be More Than 2 Charcters",
      });
    } else if (userName.current.value == "") {
      resetInputs();
      setCheckUserName(true);
      setAddUserMessage({
        ...addUserMessage,
        userName: "Please Fill User Name",
      });
    } else if (userName.current.value.length <= 2) {
      resetInputs();
      setCheckUserName(true);
      setAddUserMessage({
        ...addUserMessage,
        userName: "User Name Must Be More Than 2 Character",
      });
    } else if (email.current.value == "") {
      resetInputs();
      setCheckEmail(true);
      setAddUserMessage({
        ...addUserMessage,
        email: "Please Fill Email",
      });
    } else if (!emailRgx.test(email.current.value)) {
      resetInputs();
      setCheckEmail(true);
      setAddUserMessage({
        ...addUserMessage,
        email: "Please Fill Valid Email",
      });
    } else if (password.current.value == "") {
      resetInputs();
      setCheckPassword(true);
      setAddUserMessage({
        ...addUserMessage,
        password: "Please Fill Password",
      });
    } else if (password.current.value.length < 6) {
      resetInputs();
      setCheckPassword(true);
      setAddUserMessage({
        ...addUserMessage,
        password: "Password Must Be More Than 6 Charcter",
      });
    } else if (city.current.value == "") {
      resetInputs();
      setCheckCity(true);
      setAddUserMessage({
        ...addUserMessage,
        city: "Please Fill City",
      });
    } else if (phoneNumber.current.value == "") {
      resetInputs();
      setCheckPhoneNumber(true);
      setAddUserMessage({
        ...addUserMessage,
        phoneNumber: "Please Fill Phone Number",
      });
    } else if (!phoneRegex.test(phoneNumber.current.value)) {
      resetInputs();
      setCheckPhoneNumber(true);
      setAddUserMessage({
        ...addUserMessage,
        phoneNumber: "Please Fill Valid Phone Number",
      });
    } else {
      resetInputs();
      addUser();
      navigate("/admin/users");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div
          className="col-md-9 mx-auto mt-5"
          style={{ background: "#C0C0C0" }}
        >
          <div className="container p-3 h-100">
            <h3 className="text-center mb-4">Add User</h3>
            <div className="mb-3 row ">
              <div className="col">
                <label className="form-label fw-bold">First Name</label>
                <input
                  placeholder="Enter first name"
                  type="text"
                  className="form-control fw-bold"
                  ref={firstName}
                />
                {checkFirstName && (
                  <div className="text-danger m-2 fw-bold ">
                    {addUserMessage.firstName}
                  </div>
                )}
              </div>
              <div className="col">
                <label className="form-label fw-bold">Last Name</label>
                <input
                  placeholder="Enter last name"
                  type="text"
                  className="form-control fw-bold"
                  ref={lastName}
                />
                {checkLastName && (
                  <div className="text-danger m-2 fw-bold ">
                    {addUserMessage.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">User Name</label>
              <input
                placeholder="enter user name"
                type="text"
                className="form-control fw-bold"
                ref={userName}
              />
              {checkUserName && (
                <div className="text-danger m-2 fw-bold ">
                  {addUserMessage.userName}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                placeholder="enter email"
                type="text"
                className="form-control fw-bold"
                ref={email}
              />
              {checkEmail && (
                <div className="text-danger m-2 fw-bold ">
                  {addUserMessage.email}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <input
                placeholder="Password"
                type="Password"
                className="form-control fw-bold"
                ref={password}
              />
              {checkPassword && (
                <div className="text-danger m-2 fw-bold ">
                  {addUserMessage.password}
                </div>
              )}
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label className="form-label fw-bold">City</label>
                <input
                  placeholder="enter city"
                  type="text"
                  className="form-control fw-bold"
                  ref={city}
                />
                {checkCity && (
                  <div className="text-danger m-2 fw-bold ">
                    {addUserMessage.city}
                  </div>
                )}
              </div>
              <div className="col">
                <label className="form-label fw-bold">Gender</label>
                <select className="form-select fw-bold" ref={selectGender}>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label fw-bold">Phone Number</label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  ref={phoneNumber}
                />
                {checkPhoneNumber && (
                  <div className="text-danger m-2 fw-bold ">
                    {addUserMessage.phoneNumber}
                  </div>
                )}
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center mb-4 ">
              <button className="btn btn-primary" onClick={validateInputs}>
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddUser;
