import React from 'react';
import styles from './Profile.module.css'
import ContactInfo from './ContactInfo';
import Social from './Social';
import Media from './Media';

function Profile (props) {
  return (
    <div className={styles.container}>
    <ContactInfo/>
    <Social/>
    <Media/>
    </div>
  );
}

export default Profile;