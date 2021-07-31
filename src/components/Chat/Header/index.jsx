import React from 'react';
import styles from '../Chat.module.css'
import SearchMessage from './SearchMessage';
import ContactName from './ContactName';
import SlideOut from './SlideOut';

function Header () {
  return (
    <div className={styles.header_wrap}>
      <SearchMessage/>
      <ContactName/>
      <SlideOut/>
    </div>
  );
}

export default Header;