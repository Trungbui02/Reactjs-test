import React, { useState } from "react";
import "./Sign-in.css";
import { loginApi } from "../servcies/UserService";
import { useNavigate } from "react-router-dom";
const SignIn = ({}) => {
  const [username, setUserName] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    let res = await loginApi(username);
    if (res && res.hasOwnProperty("accessToken")) {
      localStorage.setItem("token", res.accessToken);
      setIsLoggedin(true);
      navigate("/sign-up");
    } else {
      alert("Tên người dùng chưa được đăng ký");
    }
  };
  return (
    <div className="sign-in">
      <div className="content">
        <span className="logo1"></span>
        <span className="logo2"></span>
        <h1 className="title-sign">Sign In</h1>
        <p className="name">Username</p>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={() => handleLogin()} className="btn-sign">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
