import React from 'react';
import styles from '../Chat.module.css'

function SlideOut (props) {
  return (
    <div>
      <button className={styles.slideout_btn}>
        <div className="material-icons">account_circle</div>
      </button>
    </div>
  );
}

export default SlideOut;