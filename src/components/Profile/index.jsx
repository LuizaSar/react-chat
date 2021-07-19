import React from 'react';
import styles from './Profile.module.css'
import ContactInfo from './ContactInfo';
import Social from './Social';
import Media from './Media';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Profile (props) {
  const contactId = useParams().id;
  const contacts = useSelector(state => {
    return state.contacts.items
  })
  const contactsLoading = useSelector(state => {
    return state.contacts.loading
  })
  const contact = contacts.filter(contact=>{
    if(contactId === contact._id) {
      return true
    }
    return false
  })

  if(contactsLoading) {
    return  <div/>
  }
  else return (
      contact.map(contact=>{
        return (
          <div className={styles.container}>
          <ContactInfo contact={contact}/>
          <Social contact={contact}/>
          <Media contact={contact}/>
        </div>
        )})

  );

}

export default Profile;