import React from 'react';
import styles from '../Chat.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ContactName (props) {
  const contactId = useParams().id;
  const contacts = useSelector(state => {
    return state.contacts.items
  })
  const contactName = contacts.filter(contact=>{
    if(contactId === contact._id) {
      return true
    }
    return false
  })
  return (
    <div className={styles.contact_name}>
      {contactName.map((item=>{
        return item.fullname
      }))}
    </div>
  );
}

export default ContactName;