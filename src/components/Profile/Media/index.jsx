import React from 'react';
import styles from '../Profile.module.css'

function Media (props) {
  return (
    <div>
      <div className={styles.media_title}>Media</div>
      <div className={styles.media_block}>
        <div className={styles.media_img}>
          <img src='https://s3.amazonaws.com/amacobrent/spree/products/attachments/6171/product/tp20-sky-blue-square-2048px.jpg?1419289011' alt='' />
        </div>
        <div className={styles.media_text}>
          desktop-chat.pdf
        </div>
      </div>
    </div>
  );
}

export default Media;