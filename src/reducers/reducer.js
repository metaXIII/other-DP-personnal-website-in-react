import { CHANGE_HEADER_BACKGROUND, TOGGLE_MENU, UPDATE_WIDTH, TOGGLE_MENU_WITH_WIDTH, HIDE_CUSTOM_CURSOR, SHOW_CUSTOM_CURSOR } from '../actions';

const initialState = {
  headerColor: false,
  visibleMenu: false,
  customCursorVisible: true,
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

    case HIDE_CUSTOM_CURSOR:
      return {
        ...state,
        customCursorVisible: false,
      };

    case SHOW_CUSTOM_CURSOR:
      return {
        ...state,
        customCursorVisible: true,
      };

    default:
      return state;
  }
};

export default reducer;
