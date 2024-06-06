import React, { useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const SignUp = ({ users, setIfUserChanged, ifUserChanged }) => {
  const [signUpInputs, setSignUpInputs] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    city: "",
    phoneNumber: "",
  });
  const [signUpInputsMessage, setSignUpInputsMessage] = useState({
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
  const [loader, setLoader] = useState(false);
  const selectGender = useRef();
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      const response = axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          firstname: signUpInputs.firstName,
          lastname: signUpInputs.lastName,
          username: signUpInputs.userName,
          email: signUpInputs.email,
          password: signUpInputs.password,
          image:
            selectGender.current.value == "male"
              ? "https://www.svgrepo.com/show/382107/male-avatar-boy-face-man-user-6.svg"
              : "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
          city: signUpInputs.city,
          phonenumber: signUpInputs.phoneNumber,
          gender: selectGender.current.value,
          role: "member",
        },
      });
      setIfUserChanged(!ifUserChanged);
    } catch (err) {
      console.log(err);
    }
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
    console.log(selectGender.current.value);
    if (signUpInputs.firstName == "") {
      setCheckFirstName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        firstName: "Please Fill First Name",
      });
    } else if (signUpInputs.firstName.length <= 2) {
      setCheckFirstName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        firstName: "First Name Must Be More Than 2 Charcters",
      });
    } else if (signUpInputs.lastName == "") {
      resetInputs();
      setCheckLastName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        lastName: "Please Fill Last Name",
      });
    } else if (signUpInputs.lastName.length <= 2) {
      resetInputs();
      setCheckLastName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        lastName: "Last Name Must Be More Than 2 Charcters",
      });
    } else if (signUpInputs.userName == "") {
      resetInputs();
      setCheckUserName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        userName: "Please Fill User Name",
      });
    } else if (signUpInputs.userName.length <= 2) {
      resetInputs();
      setCheckUserName(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        userName: "User Name Must Be More Than 2 Character",
      });
    } else if (signUpInputs.email == "") {
      resetInputs();
      setCheckEmail(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        email: "Please Fill Email",
      });
    } else if (!emailRgx.test(signUpInputs.email)) {
      resetInputs();
      setCheckEmail(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        email: "Please Fill Valid Email",
      });
    } else if (signUpInputs.password == "") {
      resetInputs();
      setCheckPassword(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        password: "Please Fill Password",
      });
    } else if (signUpInputs.password.length < 6) {
      resetInputs();
      setCheckPassword(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        password: "Password Must Be More Than 6 Charcter",
      });
    } else if (signUpInputs.city == "") {
      resetInputs();
      setCheckCity(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        city: "Please Fill City",
      });
    } else if (signUpInputs.phoneNumber == "") {
      resetInputs();
      setCheckPhoneNumber(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        phoneNumber: "Please Fill Phone Number",
      });
    } else if (!phoneRegex.test(signUpInputs.phoneNumber)) {
      resetInputs();
      setCheckPhoneNumber(true);
      setSignUpInputsMessage({
        ...signUpInputsMessage,
        phoneNumber: "Please Fill Valid Phone Number",
      });
    } else {
      resetInputs();
      let checkDublicateEmail = users.some((user) => {
        return signUpInputs.email == user.email;
      });
      if (checkDublicateEmail) {
        toast.error("Email is already exist", {
          position: "top-left",
        });
      } else {
        addUser();
        setTimeout(() => {
          setLoader(!loader);
          navigate("/login");
        }, 1000);
      }
    }
  };

  return (
    <div style={{ background: "#C0C0C0" }}>
      <ToastContainer />
      <div className="container p-5 h-100">
        <div className="mb-3 row">
          <div className="col">
            <label className="form-label fw-bold">First Name</label>
            <input
              placeholder="Enter first name"
              type="text"
              className="form-control fw-bold"
              value={signUpInputs.firstName}
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, firstName: e.target.value })
              }
            />
            {checkFirstName && (
              <div className="text-danger m-2 fw-bold ">
                {signUpInputsMessage.firstName}
              </div>
            )}
          </div>
          <div className="col">
            <label className="form-label fw-bold">Last Name</label>
            <input
              placeholder="Enter last name"
              type="text"
              className="form-control fw-bold"
              value={signUpInputs.lastName}
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, lastName: e.target.value })
              }
            />
            {checkLastName && (
              <div className="text-danger m-2 fw-bold ">
                {signUpInputsMessage.lastName}
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
            value={signUpInputs.userName}
            onChange={(e) =>
              setSignUpInputs({ ...signUpInputs, userName: e.target.value })
            }
          />
          {checkUserName && (
            <div className="text-danger m-2 fw-bold ">
              {signUpInputsMessage.userName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            placeholder="enter email"
            type="text"
            className="form-control fw-bold"
            value={signUpInputs.email}
            onChange={(e) =>
              setSignUpInputs({ ...signUpInputs, email: e.target.value })
            }
          />
          {checkEmail && (
            <div className="text-danger m-2 fw-bold ">
              {signUpInputsMessage.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            placeholder="Password"
            type="Password"
            className="form-control fw-bold"
            value={signUpInputs.password}
            onChange={(e) =>
              setSignUpInputs({ ...signUpInputs, password: e.target.value })
            }
          />
          {checkPassword && (
            <div className="text-danger m-2 fw-bold ">
              {signUpInputsMessage.password}
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
              value={signUpInputs.city}
              onChange={(e) =>
                setSignUpInputs({ ...signUpInputs, city: e.target.value })
              }
            />
            {checkCity && (
              <div className="text-danger m-2 fw-bold ">
                {signUpInputsMessage.city}
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
              value={signUpInputs.phoneNumber}
              onChange={(e) =>
                setSignUpInputs({
                  ...signUpInputs,
                  phoneNumber: e.target.value,
                })
              }
            />
            {checkPhoneNumber && (
              <div className="text-danger m-2 fw-bold ">
                {signUpInputsMessage.phoneNumber}
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <div className="text-primary form-check">
            <input required="" type="checkbox" className="form-check-input" />
            <label title="" className="form-check-label">
              Apply Rules and Conditions
            </label>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center mb-4 ">
          <button className="btn btn-primary" onClick={validateInputs}>
            Create Account
            {loader && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
