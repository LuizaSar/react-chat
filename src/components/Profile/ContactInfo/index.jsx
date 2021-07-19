import React from 'react';
import styles from '../Profile.module.css'

function ContactInfo (props) {
  return (
    <div className={styles.contact_info}>
      <div className={styles.contact_avatar}>
        {props.contact.fullname.substring(0,1)}
      </div>
      <div className={styles.contact_name}>{props.contact.fullname}</div>
      <div className={styles.contact_link}>{`@${props.contact.username}`}</div>
      <div className={styles.contact_buttons}>
        <button className={styles.contact_call}>
        <span className="material-icons">call</span>
        </button>
        <button className={styles.contact_videocam}>
        <span className="material-icons">videocam</span>
        </button>
        <button className={styles.contact_email}>
          <span className="material-icons">email</span>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;