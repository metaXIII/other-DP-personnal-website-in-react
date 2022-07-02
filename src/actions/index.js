export const CHANGE_HEADER_BACKGROUND = 'CHANGE_HEADER_BACKGROUND';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const UPDATE_WIDTH = 'UPDATE_WIDTH';
export const TOGGLE_MENU_WITH_WIDTH = 'TOGGLE_MENU_WITH_WIDTH';

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
