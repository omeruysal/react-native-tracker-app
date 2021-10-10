import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selector';
const Checkbox = ({checked, style, onChangeState}) => {
  const isDarkMode = GetIsDarkMode();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {...style},
        {borderColor: isDarkMode ? 'white' : 'black'},
      ]}
      onPress={() => onChangeState && onChangeState(!checked)}>
      {checked && (
        <Icon name="check" size={23} color={colors.mainColor.darkviolet} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
