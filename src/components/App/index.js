import React from "react";
import styles from './App.module.css'
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile';

function App(props) {
  return (
    <div className={styles.container}>
    <Contacts/>
    <Chat/>
    <Profile/>
    </div>

  );
}

export default App;
