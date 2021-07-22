import React from 'react';
import styles from '../Chat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMessage } from '../../../redux/ducks/messages';


function SearchMessage (props) {
  const dispatch = useDispatch();

  const search = useSelector((state) => {
    return state.messages.search;
  });
  const handleSearch = (event) => {
    dispatch(setSearchMessage(event.target.value));
  };

  return (
    <div className={styles.search_wrap}>
    <div className={styles.search_box}>
      <input
        type="text"
        placeholder="Поиск"
        className={styles.search_input}
        value={search}
        onChange={handleSearch}
      />
        <button className={styles.search_btn}>
          <div className='material-icons'>search</div>
        </button>
    </div>
    </div>
  );
}

export default SearchMessage;