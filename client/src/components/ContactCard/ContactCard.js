import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactCard.module.css";

const ContactCard = ({ contact }) => {
  return (
    <div className={styles.card}>
      {console.log(contact)}
      <div className={styles.contactDetails}>
        <div className={styles.contactInfo}>
          <h1>{contact.name}</h1>
          <h2>{contact.phone}</h2>
          <p>{contact.email}</p>
        </div>
        {contact.type === "Personal" && (
          <div className={styles.contactType}>
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
          </div>
        )}
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
