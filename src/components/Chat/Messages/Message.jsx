import React from 'react';
import styles from '../Chat.module.css'

function Message (props) {
  return (
    <div className={styles.messages_chat}>

    <div className={styles.message_incoming}>
      <div className={styles.message_avatar}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZIu0fTiXNXQKOeZRYpyKQN1ZBSANcl28A&usqp=CAU' alt='' />
      </div>
      <div className={styles.incoming_message_body}>
        <div className={styles.message_text}>Как дела? Как жизнь?Не выходи из комнаты; считай, что тебя продуло.
          Что интересней на свете стены и стула?
          Зачем выходить оттуда, куда вернёшься вечером
          таким же, каким ты был, тем более — изувеченным?</div>
        <div className={styles.message_time}>18:45</div>
      </div>
    </div>

  <div className={styles.message_outgoing}>
      <div className={styles.outgoing_message_body}>
        <div className={styles.message_text}>Да нормально. У тебя как?</div>
        <div className={styles.message_time}>19:15</div>
      </div>
  </div>

    </div>
  );
}

export default Message;