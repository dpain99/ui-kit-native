import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {SIZE, theme} from '../../assets/theme/theme';

interface HeaderBarProps extends ViewProps {
  title?: string;
  sxTitle?: StyleProp<any>;
  sx?: StyleProp<any>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  pressLeftIcon?: () => void;
  pressRightIcon?: () => void;
}
const HeaderBar = (props: HeaderBarProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.header_primary,
      padding: SIZE.size16,
      flexDirection: 'row',
      alightItems: 'center',
      ...props.sx,
    },
    titleText: {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: SIZE.size30,
      color: theme.color.color333333,
      ...props.sxTitle,
    },
    leftIcon: {
      justifyContent: 'center',
      paddingRight: SIZE.size16,
    },
    rightIcon: {
      position: 'absolute',
      right: SIZE.size16,
      alignSelf: 'center',
    },
  });

  const handlePressLeftIcon = () => {
    if (props.pressLeftIcon !== undefined) {
      props.pressLeftIcon();
    }
  };
  const handlePressRightIcon = () => {
    if (props.pressRightIcon !== undefined) {
      props.pressRightIcon();
    }
  };

  return (
    <View style={styles.container}>
      {props.leftIcon !== undefined && (
        <TouchableOpacity style={styles.leftIcon} onPress={handlePressLeftIcon}>
          {props.leftIcon}
        </TouchableOpacity>
      )}
      <Text style={styles.titleText}>{props.title}</Text>
      {props.rightIcon !== undefined && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={handlePressRightIcon}>
          {props.rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default HeaderBar;
