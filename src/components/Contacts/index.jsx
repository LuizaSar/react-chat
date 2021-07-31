import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import SearchContact from './SearchContact';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import { CircularProgress } from '@material-ui/core';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);


  const [contacts, loading, search] = useSelector((state) => [
    state.contacts.items,
    state.contacts.loading,
    state.contacts.searchContact,
  ]);


  const filteredContacts = contacts.filter((item) => {
    return item.fullname.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });

  if (loading) {
    return (
      <div className={styles.container_loading}>
        <SearchContact />
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <SearchContact />
      <ul className={styles.contacts_list}>
        {filteredContacts.map((contact, key) => {
          return <Contact contact={contact} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default Contacts;
