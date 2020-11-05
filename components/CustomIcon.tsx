import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomIcon = ({focused, color, size, name}) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIcon;
