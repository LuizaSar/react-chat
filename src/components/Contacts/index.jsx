import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import SearchContact from './SearchContact';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import { CircularProgress } from '@material-ui/core';

function Contacts(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => {
    return state.contacts.items;
  });
  const loading = useSelector((state) => {
    return state.contacts.loading;
  });
  const search = useSelector((state) => {
    return state.contacts.searchContact;
  });

  const filteredContacts = contacts.filter((item) => {
    return item.fullname.indexOf(search) > -1;
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
