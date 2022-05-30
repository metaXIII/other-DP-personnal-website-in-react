export const CHANGE_HEADER_BACKGROUND = 'CHANGE_HEADER_BACKGROUND';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const changeHeaderBackground = (newValue) => ({
  type: CHANGE_HEADER_BACKGROUND,
  value: newValue,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
