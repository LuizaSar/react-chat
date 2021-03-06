import React from 'react';
import styles from '../Profile.module.css';
import PropTypes from 'prop-types';

function ContactInfo({ contact }) {
  return (
    <div className={styles.contact_info}>
      <div className={styles.contact_avatar}>
        {contact.fullname.substring(0, 1)}
      </div>
      <div className={styles.contact_name}>{contact.fullname}</div>
      <div className={styles.contact_link}>{`@${contact.username}`}</div>
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

ContactInfo.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactInfo;
