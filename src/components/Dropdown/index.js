import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selector';

const Dropdown = ({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = 'Seçiniz',
  onDonePress = () => {},
}) => {
  const isDark = GetIsDarkMode();
  const changeableColor = isDark ? 'white' : 'black';
  const doneText = 'Tamam';
  const iconStyle = isDark ? {} : {};

  return (
    <View style={[styles.dropdown, {borderColor: changeableColor}]}>
      <RNPickerSelect
        onValueChange={val => onValueChange(val)}
        items={items}
        value={value}
        doneText={doneText}
        placeholder={{label: placeholder}}
        style={{
          inputIOS: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: changeableColor,
          },
          inputAndroid: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: changeableColor,
            top: 0,
          },
        }}
        onDonePress={() => onDonePress()}
        Icon={() => {
          return (
            <Icon
              name="expand-more"
              size={20}
              color={changeableColor}
              style={iconStyle}
            />
          );
        }}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: Platform.OS === 'ios' ? 42 : 38,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  title: {
    color: 'white',
  },
  picker: {},
  icon: {},
});
