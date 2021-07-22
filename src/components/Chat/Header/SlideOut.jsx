import React from 'react';
import styles from '../Chat.module.css'
import { setToggle } from '../../../redux/ducks/messages';
import { useDispatch} from 'react-redux';

function SlideOut (props) {
  const dispatch = useDispatch();

  const handleSetToggle =() => {
    dispatch(setToggle());
  };

  return (
    <div>
      <button className={styles.slideout_btn}
      onClick={handleSetToggle}
      >
        <div className="material-icons">account_circle</div>
      </button>
    </div>
  );
}

export default SlideOut;