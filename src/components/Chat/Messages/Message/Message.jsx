import React, { useEffect, useRef } from 'react';
import styles from '../../Chat.module.css';
import { deleteMessage } from '../../../../redux/ducks/messages';
import { useDispatch, useSelector } from 'react-redux';
import MessageTime from './MessageTime';
import PropTypes from 'prop-types';


function Message(props) {
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };

  const deleting = useSelector((state) => {
    return state.messages.deletingMessageId;
  });
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });
  const contactName = contacts.filter((contact) => {
    if (props.contactId === contact._id) {
      return true;
    }
    return false;
  });

  return (
    <div
      className={`${styles.message_block} ${
        deleting === props.message._id ? styles.fade_out : ''
      }`}
    >
      <div
        className={`${
          props.myId === props.message.toUserId
            ? styles.message_incoming
            : styles.message_outgoing
        } `}
      >
        {props.myId === props.message.toUserId ? (
          <div className={styles.message_avatar}>
            {contactName.map((item) => {
              return item.fullname.substring(0, 1);
            })}
          </div>
        ) : null}
        <div
          className={`${
            props.myId === props.message.toUserId
              ? styles.incoming_message_body
              : styles.outgoing_message_body
          } `}
        >
          <button
            className={styles.delete}
            onClick={() => handleDeleteMessage(props.message._id)}
          >
            ❌
          </button>
          <div className={styles.message_text}>{props.message.content}</div>
          <MessageTime message={props.message} myId={props.myId} />
        </div>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}


Message.propTypes = {
  message: PropTypes.object.isRequired,
  myId: PropTypes.string.isRequired,
  contactId:PropTypes.string.isRequired,
};

export default Message;
