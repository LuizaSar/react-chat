const initialState = {
  items:[],
  loading:false
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true
      };
    case 'contacts/load/success':
      return {
        ...state,
        items:action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export  function loadContacts() {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
}