import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import SearchContact from './SearchContact';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';

function Contacts (props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const contacts = useSelector(state => {
    return state.contacts.items
  })
  const search = useSelector(state => {
    return state.contacts.searchContact
  })

  const filteredContacts = contacts.filter((item) => {
    if (item.fullname.indexOf(search) > -1) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.container}>
      <SearchContact contacts={contacts}/>
      <ul className={styles.contacts_list}>
        {filteredContacts.map((contact, key)=>{
          return (
            <Contact contact={contact} key={key}/>
          )
        })}
      </ul>
    </div>
  );
}

export default Contacts;