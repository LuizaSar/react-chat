import React, { useEffect } from 'react';
import styles from './App.module.css';
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import StartPage from '../StartPage';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Route exact path={'/'}>
        <Contacts />
        <StartPage />
      </Route>
      <Route exact path={'/:id'}>
        <Contacts />
        <Chat />
        <Profile />
      </Route>
    </div>
  );
}

export default App;
