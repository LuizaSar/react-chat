import React from 'react';
import styles from './Chat.module.css'
import Header from './Header';
import Messages from './Messages';
import InputField from './InputField';

function Chat(props) {
  return <div className={styles.container}>
    <Header/>
    <Messages/>
    <InputField/>
  </div>;
}

export default Chat;
