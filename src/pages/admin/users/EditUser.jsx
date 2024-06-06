import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../../../components/admin/SideBar";

const EditUser = ({ ifUserChanged, setIfUserChanged }) => {
  const [editUserMessage, setEditUserMessage] = useState({
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
  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/users/${userId}`,
      });
      const data = response.data;
      firstName.current.value = data.firstname;
      lastName.current.value = data.lastname;
      userName.current.value = data.username;
      email.current.value = data.email;
      password.current.value = data.password;
      city.current.value = data.city;
      selectGender.current.value = data.gender;
      phoneNumber.current.value = data.phonenumber;
    } catch (err) {
      console.log(err);
    }
  };
  const editUser = async () => {
    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:3000/users/${userId}`,
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
      setEditUserMessage({
        ...editUserMessage,
        firstName: "Please Fill First Name",
      });
    } else if (firstName.current.value.length <= 2) {
      setCheckFirstName(true);
      setEditUserMessage({
        ...editUserMessage,
        firstName: "First Name Must Be More Than 2 Charcters",
      });
    } else if (lastName.current.value == "") {
      resetInputs();
      setCheckLastName(true);
      setEditUserMessage({
        ...editUserMessage,
        lastName: "Please Fill Last Name",
      });
    } else if (lastName.current.value.length <= 2) {
      resetInputs();
      setCheckLastName(true);
      setEditUserMessage({
        ...editUserMessage,
        lastName: "Last Name Must Be More Than 2 Charcters",
      });
    } else if (userName.current.value == "") {
      resetInputs();
      setCheckUserName(true);
      setEditUserMessage({
        ...editUserMessage,
        userName: "Please Fill User Name",
      });
    } else if (userName.current.value.length <= 2) {
      resetInputs();
      setCheckUserName(true);
      setEditUserMessage({
        ...editUserMessage,
        userName: "User Name Must Be More Than 2 Character",
      });
    } else if (email.current.value == "") {
      resetInputs();
      setCheckEmail(true);
      setEditUserMessage({
        ...editUserMessage,
        email: "Please Fill Email",
      });
    } else if (!emailRgx.test(email.current.value)) {
      resetInputs();
      setCheckEmail(true);
      setEditUserMessage({
        ...editUserMessage,
        email: "Please Fill Valid Email",
      });
    } else if (password.current.value == "") {
      resetInputs();
      setCheckPassword(true);
      setEditUserMessage({
        ...editUserMessage,
        password: "Please Fill Password",
      });
    } else if (password.current.value.length < 6) {
      resetInputs();
      setCheckPassword(true);
      setEditUserMessage({
        ...editUserMessage,
        password: "Password Must Be More Than 6 Charcter",
      });
    } else if (city.current.value == "") {
      resetInputs();
      setCheckCity(true);
      setEditUserMessage({
        ...editUserMessage,
        city: "Please Fill City",
      });
    } else if (phoneNumber.current.value == "") {
      resetInputs();
      setCheckPhoneNumber(true);
      setEditUserMessage({
        ...editUserMessage,
        phoneNumber: "Please Fill Phone Number",
      });
    } else if (!phoneRegex.test(phoneNumber.current.value)) {
      resetInputs();
      setCheckPhoneNumber(true);
      setEditUserMessage({
        ...editUserMessage,
        phoneNumber: "Please Fill Valid Phone Number",
      });
    } else {
      resetInputs();
      editUser();
      navigate("/admin/users");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div
          className="col-md-9 mx-auto mt-5"
          style={{ background: "#C0C0C0" }}
        >
          <div className="container p-3 h-100">
            <h3 className="text-center mb-4">Edit User</h3>
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
                    {editUserMessage.firstName}
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
                    {editUserMessage.lastName}
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
                  {editUserMessage.userName}
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
                  {editUserMessage.email}
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
                  {editUserMessage.password}
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
                    {editUserMessage.city}
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
                    {editUserMessage.phoneNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center mb-4 ">
              <button className="btn btn-primary" onClick={validateInputs}>
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
