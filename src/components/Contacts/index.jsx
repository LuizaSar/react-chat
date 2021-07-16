import React from 'react';
import SearchContact from './SearchContact';
import styles from './Contacts.module.css';
import Contact from './Contact';

function Contacts (props) {
  return (
    <div className={styles.container}>
      <SearchContact/>
      <ul className={styles.contacts_list}>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
      </ul>
    </div>
  );
}

export default Contacts;