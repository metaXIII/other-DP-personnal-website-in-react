import { CHANGE_HEADER_BACKGROUND, TOGGLE_MENU } from '../actions';

const initialState = {
  headerColor: false,
  visibleMenu: true,
  width: window.innerWidth,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEADER_BACKGROUND:
      return {
        ...state,
        headerColor: action.value,
      };

    case TOGGLE_MENU:
      return {
        ...state,
        visibleMenu: !state.visibleMenu,
      };

    default:
      return state;
  }
};

export default reducer;
