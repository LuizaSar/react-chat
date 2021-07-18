import React from 'react';
import styles from '../Profile.module.css'

function ContactInfo (props) {
  return (
    <div className={styles.contact_info}>
      <div className={styles.contact_avatar}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZIu0fTiXNXQKOeZRYpyKQN1ZBSANcl28A&usqp=CAU' alt='' />
      </div>
      <div className={styles.contact_name}>Кудузов Ахмад</div>
      <div className={styles.contact_link}>@kuduzow</div>
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