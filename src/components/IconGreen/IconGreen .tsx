import {Image} from 'react-native';
import React from 'react';
import {typeIconGreen} from './type';
const IconGreen = (props: typeIconGreen) => {
  return (
    <Image
      style={[props.style, {width: props.size ?? 25, height: props.size ?? 25}]}
      source={props.name}
    />
  );
};

export default IconGreen;
