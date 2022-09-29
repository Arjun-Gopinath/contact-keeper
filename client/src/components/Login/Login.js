import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import Logo from "../../assets/Logo.png";
import { handleLogin } from "../../hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className={styles.container}>
      {isLoggedIn && <Navigate to="/contact" replace={true} />}
      <div className={styles.loginWindow}>
        <input
          className={styles.input}
          type="text"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={styles.input}
          type="text"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className={styles.submit}
          type="submit"
          onClick={() => {
            handleLogin({ email, password });
            if (localStorage.getItem("token")) setIsLoggedIn(true);
            else setIsLoggedIn(false);
          }}
        >
          Login
        </button>
        <a href="/register">New user? Register</a>
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt="Contact Keeper Logo" />
        <h1>Contact Keeper</h1>
      </div>
    </div>
  );
};

export default Login;
