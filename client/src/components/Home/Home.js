import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import EditContact from "./EditContact";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <EditContact />
      </div>
      <div className={styles.contacts}>
        <h1>Contacts</h1>
        <div className={styles.search}>
          <input
            type="text"
            id="search"
            placeholder="Search for contacts.."
            title="Type contact name..."
          />
        </div>
        <div>
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
