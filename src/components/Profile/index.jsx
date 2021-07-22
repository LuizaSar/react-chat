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
  });
  const contact = contacts.filter(contact=>{
    if(contactId === contact._id) {
      return true
    }
    return false
  });

  const toggle = useSelector(state => {
    return state.messages.toggle
  })

  return (
      contact.map((contact, key)=>{
        return (
          <div className={`${styles.container} ${
            toggle ? styles.slideout : ''
          }`} key={key}>
          <ContactInfo contact={contact}/>
          <Social contact={contact}/>
          <Media contact={contact}/>
        </div>
        )})

  );

}

export default Profile;