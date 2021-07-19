const initialState = {
  items:[],
  loading:false
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'messages/load/start':
      return {
      ...state,
        loading: true
    };
    case 'messages/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

export  function loadMessages(myId, contactId) {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'messages/load/success',
          payload: json,
        });
      });
  };
}
