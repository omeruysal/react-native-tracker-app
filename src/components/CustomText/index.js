import React ,{useMemo}from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../constants';
import { GetIsDarkMode } from '../../redux/system/selector';

const CustomText = ({text, style}) => {
  const isDark = GetIsDarkMode();

  const textStyle = useMemo(() => {
    const styles = {
      fontSize: fonts.f14,
      fontWeight: '600',
      ...style,
      color: isDark ? 'white' : 'black',
    };

    return styles;
  }, [style, isDark]);
  return <Text style={textStyle}>{text}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({});
