import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// backend api endpoint for login..
const baseUrl = "http://localhost:3333/auth/login";

const Login = (props) => {
  const navigate = useNavigate(); // for routing

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginFormHandler = (event) => {
    event.preventDefault();
    const loginData = {
      username: userName,
      password: password,
    };

    console.log(loginData);

    // submitting data to api using axios
    axios
      .post(baseUrl, loginData)
      .then((response) => {
        // console.log(response.data);
        const responseData = response.data;
        if (responseData.id !== 0) {
          alert("login success");
        } else {
          alert("login fails");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setUserName("");
    setPassword("");
  };
  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={loginFormHandler}>
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter your username"
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
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="lead">Not a User? </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Register
      </button>
    </>
  );
};

export default Login;
