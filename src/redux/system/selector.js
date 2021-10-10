import {useSelector} from 'react-redux';

export function GetIsDarkMode() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);
  return isDarkMode;
}
export function GetUser() {
  const user = useSelector(state => state.system.userInfo);
  return user;
}
