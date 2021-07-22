const initialState = {
  items:[],
  loading:false,
  searchContact:''
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
    case 'contacts/search/set':
      return {
        ...state,
        searchContact: action.payload
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
export function setSearchContact(text) {
  return {
    type: 'contacts/search/set',
    payload: text,
  };
}
