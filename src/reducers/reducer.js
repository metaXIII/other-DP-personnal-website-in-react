import { CHANGE_HEADER_BACKGROUND, TOGGLE_MENU, UPDATE_WIDTH, TOGGLE_MENU_WITH_WIDTH, HIDE_CUSTOM_CURSOR, SHOW_CUSTOM_CURSOR, UPDATE_CURSOR_POSITION } from '../actions';

const initialState = {
  headerColor: false,
  visibleMenu: false,
  customCursorVisible: true,
  width: window.innerWidth,
  cursorXposition: '',
  cursorYposition: '',
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

    case UPDATE_CURSOR_POSITION:
      return {
        ...state,
        cursorXposition: action.Xposition,
        cursorYposition: action.Yposition,
      };

    default:
      return state;
  }
};

export default reducer;
