import React from 'react';
import styles from '../Profile.module.css';
import { AiFillFacebook, AiOutlineTwitter, FiInstagram } from 'react-icons/all';
import PropTypes from 'prop-types';

function Social({ contact }) {
  return (
    <div>
      <div className={styles.social_title}>Social</div>
      <div className={styles.social_block}>
        <div className={styles.social_wrap}>
          <FiInstagram className={styles.social_instagram} />
          <span className={styles.social_name}>{contact.username}</span>
        </div>
        <div className={styles.social_wrap}>
          <AiOutlineTwitter className={styles.social_twitter} />
          <span className={styles.social_name}>{contact.username}</span>
        </div>
        <div className={styles.social_wrap}>
          <AiFillFacebook className={styles.social_facebook} />
          <span className={styles.social_name}>{contact.username}</span>
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Social;
