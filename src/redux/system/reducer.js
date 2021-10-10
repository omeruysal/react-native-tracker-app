import {
  HIDE_LOADER,
  TOGGLE_LOADER,
  USER_LOGOUT,
  SET_THEME,
  SET_USER,
  SET_LANGUAGE,
} from './actionType';

const initialState = {
  loading: false,
  userInfo: {},
  token: '',
  language: 'TR',
  isDarkMode: false,
  isLogin: false,
};
export const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: {},
        loading: false,
        language: 'TR',
        isLogin: false,
      };
    case SET_USER:
      return {...state, isLogin: true, userInfo: action.payload};
    case SET_THEME:
      return {...state, isDarkMode: action.payload};
    case SET_LANGUAGE:
      return {...state, language: action.payload};

    default:
      return state;
  }
};
