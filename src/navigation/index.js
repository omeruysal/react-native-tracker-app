import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './RootNavigation';
import {useDispatch, useSelector} from 'react-redux';

const myTheme = {
  ...DefaultTheme,
};

const Navigation = () => {
  const isDarkMode = useSelector(state => state.system.isDarkMode);
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={barStyle} backgroundColor={'black'} />
      <RootNavigation />
    </NavigationContainer>
  );
};
export default Navigation;
