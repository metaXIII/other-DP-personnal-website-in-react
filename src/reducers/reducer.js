import { CHANGE_HEADER_BACKGROUND, TOGGLE_MENU, UPDATE_WIDTH, TOGGLE_MENU_WITH_WIDTH } from '../actions';

const initialState = {
  headerColor: false,
  visibleMenu: false,
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

    case TOGGLE_MENU_WITH_WIDTH:
      return {
        ...state,
        visibleMenu: action.value,
      };

    case UPDATE_WIDTH:
      return {
        ...state,
        width: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
