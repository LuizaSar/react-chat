import React from 'react';
import styles from '../Chat.module.css'

function Message (props) {
  return (
    <div className={styles.messages_chat}>

    <div className={`${props.myId === props.message.toUserId ? styles.message_incoming :  styles.message_outgoing} `}>
      {props.myId === props.message.toUserId ? <div className={styles.message_avatar}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZIu0fTiXNXQKOeZRYpyKQN1ZBSANcl28A&usqp=CAU' alt='' />
      </div> : null}
      <div className={`${props.myId === props.message.toUserId ? styles.incoming_message_body  : styles.outgoing_message_body } `}>
        <div className={styles.message_text}>{props.message.content}</div>
        <div className={styles.message_time}>
          {new Date(props.message.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
    </div>

    </div>
  );
}

export default Message;