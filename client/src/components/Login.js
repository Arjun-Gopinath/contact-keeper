import React from "react";
import styles from "./Login.module.css";
import Logo from "../assets/Logo.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <input
          className={styles.input}
          type="text"
          name="Email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="text"
          name="Password"
          placeholder="Password"
        />
        <input
          className={styles.submit}
          type="submit"
          value="Login"
          placeholder="Login"
        />
        <a href="/register">New user? Register</a>
      </div>
      <div className={styles.logo}>
        <img src={Logo} />
        <h1>Contact Keeper</h1>
      </div>
    </div>
  );
};

export default Login;
