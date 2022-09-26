import React from "react";
import styles from "./AddContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHome } from "@fortawesome/free-solid-svg-icons";
const AddContact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.addContact}>
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
        <div className={styles.contactType}>
          <button className={styles.contactTypeInput}>
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
          </button>
          <button className={styles.contactTypeInput}>
            <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
          </button>
        </div>
        <input
          className={styles.submit}
          type="submit"
          value="Add Contact"
          placeholder="Add Contact"
        />
      </div>
    </div>
  );
};

export default AddContact;
