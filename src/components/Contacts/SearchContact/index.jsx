import React from 'react';
import styles from '../Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchContact } from '../../../redux/ducks/contacts';

function SearchContact(props) {
  const dispatch = useDispatch();

  const search = useSelector((state) => {
    return state.contacts.searchContact;
  });
  const handleSearch = (event) => {
    dispatch(setSearchContact(event.target.value));
  };

  return (
    <div>
      <div className={styles.search_form}>
        <input
          type="search"
          placeholder="Search"
          className={styles.search_input}
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchContact;
