import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>404 Not Found</h1>
      </div>
      <div>
        <p>
          Please jump to <a href="/login">Login</a> page
        </p>
      </div>
    </div>
  );
};

export default NotFound;
