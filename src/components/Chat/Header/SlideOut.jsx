import React from 'react';
import styles from '../Chat.module.css'
import { setToggle } from '../../../redux/ducks/messages';
import { useDispatch} from 'react-redux';
import account_img from './assets/img/account_circle_black_24dp.svg'

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
        <img src={account_img} alt='' />
      </button>
    </div>
  );
}

export default SlideOut;