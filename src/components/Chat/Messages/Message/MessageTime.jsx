import React from 'react';
import styles from '../../Chat.module.css';
import PropTypes from 'prop-types';

function MessageTime(props) {
  const date = new Date().toISOString();


  if (props.myId === props.message.toUserId) {
    return (
      <div className={styles.message_time}>
        {new Date(props.message.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    );
  }
  return (
    <div>
      {props.message.sending ? (
        <div className={styles.message_sub}>
        <div className={styles.message_status}>
          <div className="material-icons">schedule</div>
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
            {props.message.read ? (
              <div className="material-icons">done_all</div>
            ) : (
              <div className="material-icons">done</div>
            )}
          </div>
          <div className={styles.message_time}>
            {new Date(props.message.time).toLocaleTimeString([], {
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
