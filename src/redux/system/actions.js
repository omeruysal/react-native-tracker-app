import {
  HIDE_LOADER,
  SET_THEME,
  TOGGLE_LOADER,
  SET_USER,
  USER_LOGOUT,
} from './actionType';

//Loader için
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
//Tema için
export const setTheme = payload => {
  return {
    type: SET_THEME,
    payload,
  };
};

export const setUser = payload => {
  return {
    type: SET_USER,
    payload,
  };
};

export const logoutUser = payload => {
  return {
    type: USER_LOGOUT,
  };
};
