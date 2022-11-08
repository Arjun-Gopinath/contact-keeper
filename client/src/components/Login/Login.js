import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import {useNavigate} from 'react-router-dom'
import { handleLogin } from "../../hooks/auth";
import { getToken, handleNavigation } from "../../hooks/utils";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  const OnLoginClick = () =>{
      setIsLoggedIn(true);
      handleLogin({ email, password });
      navigate("/contact")
    }

  return (
    <div className={styles.container}>
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
          type="password"
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
          onClick={() => OnLoginClick()}
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
