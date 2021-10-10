import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default function CustomView(props) {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  //  const style = isDark ? {back }:{}
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        ...props.style,
      }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({});
