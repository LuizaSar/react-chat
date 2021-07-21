const initialState = {
  items:[],
  loading:false,
  addingMessage:false,
  deletingMessageId:null
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
      };
    case 'message/adding/start':
      return {
        ...state,
        addingMessage: true
      };
    case 'message/adding/success':
      return {
        ...state,
        addingMessage: false,
        items:[
          ...state.items,
          action.payload
        ]
      };
    case 'message/delete/start':
      return {
        ...state,
        deletingMessageId: action.payload
      };
    case 'message/delete/success':
      return {
        ...state,
        deletingMessageId: null,
        items: state.items.filter((message) => {
          if (message._id === action.payload) {
            return false;
          }
          return message;
        }),
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

export function addMessage (text, myId, contactId, type) {
  return (dispatch) => {
    dispatch({
      type: 'message/adding/start',
    });
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        content: text,
        type:type,
        contactId:contactId,
        myId:myId,
      }),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch({
          type: 'message/adding/success',
          payload: json,
        });
      });
  };
}
export function deleteMessage(id) {
  return (dispatch) => {
    dispatch({
      type: 'message/delete/start',
      payload:id
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'message/delete/success',
          payload: id,
        });
      });
  };
}