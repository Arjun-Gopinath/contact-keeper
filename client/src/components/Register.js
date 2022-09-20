import React from "react";
import styles from "./Register.module.css";
import Logo from "../assets/Logo.png";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <input
          className={styles.input}
          type="text"
          name="Name"
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="text"
          name="Phone"
          placeholder="Phone Number"
        />
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
          value="Register"
          placeholder="Register"
        />
        <a href="/login">Already a user? Login</a>
      </div>
      <div className={styles.logo}>
        <img src={Logo} />
        <h1>Contact Keeper</h1>
      </div>
    </div>
  );
};

export default Register;
