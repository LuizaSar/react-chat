import React from 'react';
import styles from '../Contacts.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <NavLink
      to={`/${props.contact._id}`}
      activeClassName={styles.contact_selected}
    >
      <li>
        <div className={styles.contact_wrap}>
          <div className={styles.contact_img}>
            {props.contact.fullname.substring(0, 1)}
          </div>
          <div className={styles.contact_main}>
            <div className={styles.contact_name}>{props.contact.fullname}</div>
            <div className={styles.contact_text}>
              {props.contact.lastMessage.content}
            </div>
          </div>
          <div className={styles.contact_time}>
            {new Date(props.contact.lastMessage.time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </li>
    </NavLink>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
