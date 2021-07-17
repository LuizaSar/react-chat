import React from 'react';
import styles from '../Chat.module.css'
import Message from './Message';


function Messages (props) {
  return (
    <div>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  );
}

export default Messages;