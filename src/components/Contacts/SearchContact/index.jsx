import React from 'react';
import styles from '../Contacts.module.css'

function SearchContact (props) {
  return (
    <div>
      <div className={styles.search_form}>
      <input type="search"  placeholder="Search" className={styles.search_input}/>
      </div>
    </div>
  );
}

export default SearchContact;