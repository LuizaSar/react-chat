import React from 'react';
import styles from './Chat.module.css';
import Header from './Header';
import Messages from './Messages';
import InputField from './InputField';
import { useSelector } from 'react-redux';

function Chat(props) {
  const toggle = useSelector((state) => {
    return state.messages.toggle;
  });
  return (
    <div className={`${styles.container} ${toggle ? styles.slideout : ''}`}>
      <Header />
      <Messages />
      <InputField />
    </div>
  );
}

export default Chat;
