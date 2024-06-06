import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ ifUserIdChanged, setIfUserIdChanged, users, userId }) => {
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const [validateMessage, setValidateMessage] = useState({
    email: "",
    password: "",
    logOutFirst: "",
  });
  const [changePasswordIcon, setChangePasswordIcon] = useState(false);
  const userEmail = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();

  const resetInputs = () => {
    setCheckEmail(false);
    setCheckPassword(false);
  };

  const validateLogin = () => {
    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userEmailValue = userEmail.current.value;
    let userPasswordValue = userPassword.current.value;
    if (userEmailValue == "") {
      setCheckEmail(true);
      setValidateMessage({
        ...validateMessage,
        email: "Please Fill Email",
      });
    } else if (!emailRgx.test(userEmailValue)) {
      setCheckEmail(true);
      setValidateMessage({
        ...validateMessage,
        email: "Please Fill Valid Email",
      });
    } else if (userPasswordValue == "") {
      resetInputs();
      setCheckEmail(true);
      setValidateMessage({
        ...validateMessage,
        password: "Please Fill Password",
      });
    } else {
      resetInputs();
      let checkUser = users.find((user) => {
        return (
          user.email == userEmailValue && user.password == userPasswordValue
        );
      });
      if (checkUser) {
        if (userId != "") {
          setCheckLogin(true);
        } else if (checkUser.role == "admin") {
          localStorage.t = "ghnj54kk";
          localStorage.s = checkUser.id;
          setIfUserIdChanged(!ifUserIdChanged);
          setCheckLogin(false);
          navigate("/");
        } else {
          localStorage.s = checkUser.id;
          setIfUserIdChanged(!ifUserIdChanged);
          setCheckLogin(false);
          navigate("/");
        }
      } else {
        toast.error("User Email Or Password is Wrong", {
          position: "top-left",
        });
      }
    }
  };
  const showPassword = () => {
    if (userPassword.current.type == "password") {
      userPassword.current.type = "text";
    } else {
      userPassword.current.type = "password";
    }
    setChangePasswordIcon(!changePasswordIcon);
  };
  return (
    <div style={{ background: "#C0C0C0" }}>
   
      <div className="container h-100">
        <div className="h-100  m-auto p-5">
          <div className="mb-3">
            <label className="form-label fw-bold">Email address</label>
            <input
              placeholder="Enter email"
              type="text"
              className="fw-bold form-control"
              ref={userEmail}
            />
            <small className="text-muted form-text">
              We'll never share your email with anyone else.
            </small>
            {checkEmail && (
              <div className="text-danger m-2 fw-bold ">
                {validateMessage.email}
              </div>
            )}
          </div>
          <div className="mb-0">
            <label className="form-label fw-bold">Password</label>
            <div className="d-flex align-items-center">
              <input
                placeholder="Password"
                type="password"
                className="fw-bold form-control"
                ref={userPassword}
              />
              {checkPassword && (
                <div className="text-danger m-2 fw-bold ">
                  {validateMessage.password}
                </div>
              )}
              <span
                style={{
                  marginLeft: "-30px",
                  fontSize: "1.3em",
                  marginBottom: "5px",
                  color: "blue",
                }}
                onClick={showPassword}
              >
                {changePasswordIcon ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          {checkLogin && (
            <div className="alert alert-danger mt-3 fw-bold " role="alert">
              Please Logout First And Try Again
            </div>
          )}
          <div className="mt-5 d-flex">
            <button className="me-2 btn btn-primary" onClick={validateLogin}>
              Login
            </button>
            <Link to="/signup">
              <button type="submit" className="btn btn-primary">
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
