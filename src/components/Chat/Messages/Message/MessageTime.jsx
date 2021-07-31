import React from 'react';
import styles from '../../Chat.module.css';
import PropTypes from 'prop-types';
import schedule from './assets/img/schedule_white_18dp.svg'
import done_all from './assets/img/done_all_white_18dp.svg'
import done from './assets/img/done_white_18dp.svg'

function MessageTime({ message, myId }) {
  const date = new Date().toISOString();

  if (myId === message.toUserId) {
    return (
      <div className={styles.message_time}>
        {new Date(message.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    );
  }
  return (
    <div>
      {message.sending ? (
        <div className={styles.message_sub}>
        <div className={styles.message_status}>
          <img src={schedule} alt='' />
        </div>
        <div className={styles.message_time}>
          {new Date(date).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        </div>
      ) : (
        <div className={styles.message_sub}>
          <div className={styles.message_status}>
            {message.read ? (
              <img src={done_all} alt='' />
            ) : (
              <img src={done} alt='' />
            )}
          </div>
          <div className={styles.message_time}>
            {new Date(message.time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      )}
    </div>
  );
}


MessageTime.propTypes = {
  message: PropTypes.object.isRequired,
  myId: PropTypes.string.isRequired,
};

export default MessageTime;
