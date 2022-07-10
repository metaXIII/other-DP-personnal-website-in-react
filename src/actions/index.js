export const CHANGE_HEADER_BACKGROUND = 'CHANGE_HEADER_BACKGROUND';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const UPDATE_WIDTH = 'UPDATE_WIDTH';
export const TOGGLE_MENU_WITH_WIDTH = 'TOGGLE_MENU_WITH_WIDTH';
export const HIDE_CUSTOM_CURSOR = 'HIDE_CUSTOM_CURSOR';
export const SHOW_CUSTOM_CURSOR = 'SHOW_CUSTOM_CURSOR';
export const CURSOR_BACKDROP = 'CURSOR_BACKDROP';
export const CURSOR_LEAVE_CONTENT = 'CURSOR_LEAVE_CONTENT';
export const CURSOR_OVER_LINK = 'CURSOR_OVER_LINK';

export const changeHeaderBackground = (newValue) => ({
  type: CHANGE_HEADER_BACKGROUND,
  value: newValue,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const updateWidth = (newValue) => ({
  type: UPDATE_WIDTH,
  value: newValue,
});

export const toggleMenuWithWidth = (newValue) => ({
  type: TOGGLE_MENU_WITH_WIDTH,
  value: newValue,
});

export const hideCustomCursor = () => ({
  type: HIDE_CUSTOM_CURSOR,
});

export const showCustomCursor = () => ({
  type: SHOW_CUSTOM_CURSOR,
});

export const cursorBackdrop = () => ({
  type: CURSOR_BACKDROP,
});

export const cursorOverLink = () => ({
  type: CURSOR_OVER_LINK,
});

export const cursorLeaveContent = () => ({
  type: CURSOR_LEAVE_CONTENT,
});
