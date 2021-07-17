import React from 'react';
import styles from '../Chat.module.css'

function InputField (props) {
  return (
    <div>
      <form className={styles.input_form}>
        <input
          type="text"
          placeholder={'Write a message'}
        />
          <button className={styles.input_attach}>
          <div className="material-icons">attach_file</div>
          </button>
        <button className={styles.input_mic}>
          <div className="material-icons">mic</div>
        </button>
      </form>
    </div>
  );
}

export default InputField;