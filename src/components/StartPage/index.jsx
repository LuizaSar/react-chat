import React from 'react';
import styles from '../StartPage/StartPage.module.css';

function StartPage() {
  return (
    <div className={styles.start_page}>
      <div className={styles.start_page_text}>
        Select a chat to start messaging
      </div>
    </div>
  );
}

export default StartPage;
