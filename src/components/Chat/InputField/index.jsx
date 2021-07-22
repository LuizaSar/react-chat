import React, { useState } from 'react';
import styles from '../Chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from '../../../redux/ducks/messages';

function InputField(props) {
  const dispatch = useDispatch();
  const contactId = useParams().id;
  const myId = useSelector((state) => {
    return state.application.item._id;
  });
  const [text, setText] = useState('');

  const handleAddMessage = (text, myId, contactId, type) => {
    dispatch(addMessage(text, myId, contactId, type));
    setText('');
  };

  return (
    <div>
      <div className={styles.input_form}>
        <input
          type="text"
          placeholder={'Write a message'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.input_attach}>
          <div className="material-icons">attach_file</div>
        </button>
        {text === '' ? (
          <button className={styles.input_mic}>
            <div className="material-icons">mic</div>
          </button>
        ) : (
          <button
            className={styles.input_send}
            onClick={() => handleAddMessage(text, myId, contactId, 'text')}
          >
            <div className="material-icons">send</div>
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
