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

  return (
    <div className={styles.container}>
      <SearchContact/>
      <ul className={styles.contacts_list}>
        {contacts.map((contact)=>{
          return (
            <Contact contact={contact}/>
          )
        })}
      </ul>
    </div>
  );
}

export default Contacts;