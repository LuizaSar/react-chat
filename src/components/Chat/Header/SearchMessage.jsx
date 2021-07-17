import React from 'react';
import styles from '../Chat.module.css'


function SearchMessage (props) {
  return (
    <div className={styles.search_wrap}>
    <div className={styles.search_box}>
      <input type="text" placeholder="Поиск" className={styles.search_input}/>
        <a href="" className={styles.search_btn}>
          <div className='material-icons'>search</div>
        </a>
    </div>
    </div>
  );
}

export default SearchMessage;