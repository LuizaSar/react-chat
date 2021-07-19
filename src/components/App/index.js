import React, { useEffect } from 'react';
import styles from './App.module.css'
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';


function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile())
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Route path={'/:id?'}>
        <Contacts/>
      </Route>
      <Route exact path={'/:id'}>
        <Chat/>
        <Profile/>
      </Route>
    </div>

  );
}

export default App;
