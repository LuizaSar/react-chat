import React from 'react';
import styles from '../Contacts.module.css'

function Contact (props) {
  return (
    <li>
    <div className={styles.contact_wrap}>
      <div className={styles.contact_img}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZIu0fTiXNXQKOeZRYpyKQN1ZBSANcl28A&usqp=CAU' alt='' />
      </div>
      <div className={styles.contact_main}>
        <div className={styles.contact_name}>Кудузов Ахмад</div>
        <div className={styles.contact_text}>Привет!</div>
      </div>
      <div className={styles.contact_time}>
        15:53
      </div>
    </div>
    </li>
  );
}

export default Contact;