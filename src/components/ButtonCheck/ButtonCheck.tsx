import {StyleSheet, Text, View, ViewStyle, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import IconGreen from '../IconGreen/IconGreen ';
import {nameIcon} from '../IconGreen/type';
import {SIZE, theme} from '../../assets/theme/theme';
interface TypeButton {
  title: string;
  checkBox?: boolean;
  sizeIcon?: number;
  styleContainer?: ViewStyle;
  onChangeValue?: any;
}
const ButtonCheck = (props: TypeButton) => {
  const {title, checkBox, sizeIcon, styleContainer, onChangeValue} = props;
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const IconCheckBox = isCheck ? nameIcon.checkBox : nameIcon.checkedBox;
  const IconCheckCircle = isCheck
    ? nameIcon.circleCheck
    : nameIcon.circleChecked;
  const isCheckBox = checkBox ? IconCheckBox : IconCheckCircle;
  const toggleCheck = () => {
    setIsCheck(!isCheck);
    if (onChangeValue) {
      onChangeValue(isCheck);
    }
  };
  return (
    <>
      {
        <View style={[styles.container, styleContainer]}>
          <TouchableOpacity
            style={[styles.button]}
            activeOpacity={0.7}
            onPress={() => toggleCheck()}>
            <IconGreen name={isCheckBox} size={sizeIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      }
    </>
  );
};

export default ButtonCheck;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {paddingRight: SIZE.size10},
  title: {
    fontSize: SIZE.size16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: theme.color.color818181,
  },
});
