import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { handleRegister } from "../../hooks/users";
import { handleNavigation, setToken } from "../../hooks/utils";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (isRegistered === true) handleNavigation("/contact");
  }, [isRegistered]);

  return (
    <div className={styles.container}>
      {isRegistered && <Navigate to="/contact" replace={true} />}
      <div className={styles.loginWindow}>
        <input
          className={styles.input}
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.submit}
          type="submit"
          onClick={() => {
            handleRegister({ name, email, password });
            setIsRegistered(true);
          }}
        >
          Register
        </button>
        <a href="/login">Already a user? Login</a>
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt="Contact Keeper Logo" />
        <h1>Contact Keeper</h1>
      </div>
    </div>
  );
};

export default Register;
