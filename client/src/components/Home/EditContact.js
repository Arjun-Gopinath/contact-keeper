import React from "react";
import styles from "./EditContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHome } from "@fortawesome/free-solid-svg-icons";

const EditContact = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.editContact}>
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
          <div className={styles.contactButtons}>
            <input
              className={styles.cancel}
              type="button"
              value="Cancel"
              placeholder="Cancel"
            />
            <input
              className={styles.submit}
              type="submit"
              value="Edit Contact"
              placeholder="Edit Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
