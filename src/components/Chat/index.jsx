import React from 'react';
import styles from './Chat.module.css'
import Header from './Header';
import Messages from './Messages';

function Chat(props) {
  return <div className={styles.container}>
    <Header/>
    <Messages/>
  </div>;
}

export default Chat;
