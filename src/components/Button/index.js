import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fonts} from '../../constants';

const index = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 17,
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: colors.mainColor.darkviolet,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    fontSize: fonts.f12,
    height: 15,
    letterSpacing: 1.0,
    color: 'white',
    fontWeight: '600',
  },
});
