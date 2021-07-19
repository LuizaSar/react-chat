import React, { useEffect } from 'react';
import styles from './App.module.css'
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile';
import { useDispatch } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import { Route } from 'react-router-dom';


function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Route exact path={'/:id?'}>
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
