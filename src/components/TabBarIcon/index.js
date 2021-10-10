import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants';

const TabBarIcon = ({name}) => {
  return <Icon name={name} color={colors.mainColor.darkviolet} size={25} />;
};

export default TabBarIcon;
