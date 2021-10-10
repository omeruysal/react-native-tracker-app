import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../navigation/TabNavigation';
import {useSelector} from 'react-redux';

export const AppScreens = {
  login: 'Login',
  home: 'Home',
};
const Stack = createStackNavigator();
const StackNavigator = () => {
  const isLogin = useSelector(state => state.system.isLogin);
  const initialRouteName = isLogin ? AppScreens.home : AppScreens.login;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin === false ? (
        <Stack.Screen name={AppScreens.login} component={LoginScreen} />
      ) : (
        <Stack.Screen name={AppScreens.home} component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
