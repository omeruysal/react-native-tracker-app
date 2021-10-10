import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, colors} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selector';

const Header = ({title}) => {
  const isDarkMode = GetIsDarkMode();
  const backgroundColor = isDarkMode ? 'black' : 'white';
  return (
    <SafeAreaView
      style={
        Platform.OS === 'ios'
          ? {backgroundColor}
          : {backgroundColor, paddingTop: StatusBar.currentHeight}
      }>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  text: {
    fontSize: fonts.f20,
    fontWeight: 'bold',
    color: colors.mainColor.darkviolet,
  },
});
