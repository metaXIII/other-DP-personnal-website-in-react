import { CHANGE_HEADER_BACKGROUND } from '../actions';

const initialState = {
  headerColor: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEADER_BACKGROUND:
      return {
        ...state,
        headerColor: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
