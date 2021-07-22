import React, { useEffect } from 'react';
import styles from '../Chat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../redux/ducks/messages';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';


function Messages (props) {
  const dispatch = useDispatch();
  const contactId = useParams().id;
  const myId = useSelector(state => {
    return state.application.item._id
  })
  useEffect(() => {
    dispatch(loadMessages(myId, contactId));
  }, [dispatch, contactId, myId]);

  const messages = useSelector(state => {
    return state.messages.items
  })
  const search = useSelector(state => {
    return state.messages.searchMessage
  })
  const filteredMessages = messages.filter((item) => {
    if (item.content.indexOf(search) > -1) {
      return true
    }
    return false
    ;

  });
  const loadingMessages = useSelector(state => {
    return state.messages.loading
  })

  if(loadingMessages) {
    return  (
   <div/>
    )}
  else return (
    <div className={styles.messages_chat}>
      {filteredMessages.map((message, key)=>{
        return <Message message={message} myId={myId} contactId={contactId} key={key}/>
      })}
    </div>
  );
}

export default Messages;