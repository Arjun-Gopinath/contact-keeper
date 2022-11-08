import React, { useEffect, useState } from "react";
import ContactCard from "../ContactCard/ContactCard";
import EditContact from "./EditContact";
import styles from "./Home.module.css";
import { getAllContacts } from "../../hooks/contacts";

const Home = () => {
  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    async function getContacts() {
      const contacts = await getAllContacts(localStorage.getItem("token"));
      console.log(contacts, localStorage.getItem("token"));
      setAllContacts(contacts);
    };

    getContacts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginWindow}>
        <EditContact />
      </div>
      <div className={styles.contacts}>
        <h1>Contacts</h1>
        {console.log(allContacts)}
        <div className={styles.search}>
          <input
            type="text"
            id="search"
            placeholder="Search for contacts.."
            title="Type contact name..."
          />
        </div>
        <div className={styles.contactCards}>
          {allContacts.map(contact => 
            <ContactCard contact={contact}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
