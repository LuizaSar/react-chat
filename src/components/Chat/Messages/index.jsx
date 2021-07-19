import React, { useEffect } from 'react';
import styles from '../Chat.module.css'
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../redux/ducks/messages';
import { useParams } from 'react-router-dom';


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

  const loadingMessages = useSelector(state => {
    return state.messages.loading
  })

  if(loadingMessages) {
    return  <div/>
  }
  else return (
    <div>
      {messages.map(message=>{
        return <Message message={message} myId={myId}/>
      })}
    </div>
  );
}

export default Messages;