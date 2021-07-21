import React, { useEffect, useRef } from 'react';
import styles from '../Chat.module.css'
import { deleteMessage } from '../../../redux/ducks/messages';
import { useDispatch, useSelector } from 'react-redux';

function Message (props) {
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, []);

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };

  const deleting = useSelector(state => {
    return state.messages.deletingMessageId
  })
  const contacts = useSelector(state => {
    return state.contacts.items
  })
  const contactName = contacts.filter(contact=>{
    if(props.contactId === contact._id) {
      return true
    }
    return false
  })

  return (
    <div className={`${styles.message_block} ${deleting === props.message._id? styles.fade_out : '' }`}>
    <div className={`${props.myId === props.message.toUserId ? styles.message_incoming :  styles.message_outgoing} `}>
      {props.myId === props.message.toUserId ?
        <div className={styles.message_avatar}>
          {contactName.map((item=>{
            return item.fullname.substring(0,1)
          }))}
      </div>
        : null}
      <div className={`${props.myId === props.message.toUserId ? styles.incoming_message_body  : styles.outgoing_message_body } `}>
        <button className={styles.delete}
                onClick={() => handleDeleteMessage(props.message._id)}
        >❌</button>
        <div className={styles.message_text}>{props.message.content}</div>
        <div className={styles.message_time}>
          {new Date(props.message.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>

    </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Message;