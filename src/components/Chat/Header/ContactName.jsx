import React from 'react';
import styles from '../Chat.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

function ContactName (props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();

  const contactId = useParams().id;
  const contacts = useSelector(state => {
    return state.contacts.items
  })
  const contactName = contacts.filter(contact=>{
    if(contactId === contact._id) {
      return true
    }
    return false
  })
  const loadingMessages = useSelector(state => {
    return state.messages.loading
  })
  if(loadingMessages) {
    return  (
      <div className={classes.root} >
        <div className={styles.loading}>
          <LinearProgress /> 
        </div>
    </div>)
  }
  return (
    <div className={styles.contact_name}>
      {contactName.map((item=>{
        return item.fullname
      }))}
    </div>
  );
}

export default ContactName;