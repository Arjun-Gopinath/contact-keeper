import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactCard.module.css";

const ContactCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.contactDetails}>
        <div className={styles.contactInfo}>
          <h1>David</h1>
          <h2>778-870-6791</h2>
          <p>david@gmail.com</p>
        </div>
        <div className={styles.contactType}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
        </div>
      </div>
      <div className={styles.editContact}>
        <button className={styles.editContactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
        </button>
        <button className={styles.editContactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
