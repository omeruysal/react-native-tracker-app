import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selector';

const Input = ({
  onChangeText,
  value = '',
  isHidden,
  icon,
  placeHolder,
  placeHolderTextColor,
  style,
  color,
  maxLength,
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);
  const isDarkMode = GetIsDarkMode();
  const priorityColor = isDarkMode ? 'white' : 'black';
  return (
    <View style={[styles.container, {...style}]}>
      <Icon name={icon} size={26} color={priorityColor} style={styles.icon} />

      <TextInput
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={priorityColor}
        secureTextEntry={isHidden ? !showPass : false}
        style={[styles.text, {color: priorityColor}]}
        {...props}
      />
      {isHidden && (
        <IconCom
          name={showPass ? 'eye' : 'eye-off'}
          size={26}
          color={priorityColor}
          style={[styles.icon]}
          onPress={() => setShowPass(prev => !prev)}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  icon: {marginRight: 15},
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#97a1be',
    marginHorizontal: 17,
  },
  text: {
    marginTop: 3,
    fontSize: fonts.f13,
    fontWeight: '600',
    width: '80%',
  },
});
