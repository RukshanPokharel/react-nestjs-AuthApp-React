import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// backend api endpoint for register..
const baseUrl = "http://localhost:3333/auth/register";

const RegisterUser = () => {
  const navigate = useNavigate(); // for routing

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const registerData = {
      username: userName,
      password: password,
      address: address,
      phone_no: phoneNo,
    };

    // submitting data to api for registering user
    axios
      .post(baseUrl, registerData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        alert("error in registering");
      });

    console.log(registerData);

    setUserName("");
    setPassword("");
    setAddress("");
    setPhoneNo("");

    navigate("/login");
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const phoneNoChangeHandler = (event) => {
    setPhoneNo(event.target.value);
  };

  return (
    <>
      <div className="container-lg">
        <div className="text-center">
          <p className="lead">Register</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {/* submit form starts */}
            <form onSubmit={formSubmitHandler}>
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={userName}
                onChange={usernameChangeHandler}
              ></input>

              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={passwordChangeHandler}
              ></input>

              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={addressChangeHandler}
              ></input>

              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                // min="99999999"
                // max="99999999"
                placeholder="Contact Number"
                value={phoneNo}
                onChange={phoneNoChangeHandler}
              ></input>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
            <p className="lead">Already Registered? </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
