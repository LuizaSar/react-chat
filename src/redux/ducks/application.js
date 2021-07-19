const initialState = {
  item: {},
  loading:false
};

export default function application (state = initialState, action) {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true
      };
    case 'profile/load/success':
      return {
        ...state,
        item:action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export  function loadProfile() {
  return (dispatch) => {
    dispatch({
      type: 'profile/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: 'profile/load/success',
          payload: json,
        });
      });
  };
}
