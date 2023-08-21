import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SIZE, theme} from '../../assets/theme/theme';

interface Props {
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'iconOnly';
  type?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'danger'
    | 'warning'
    | 'success'
    | 'outline';
  buttonStyle?: ViewStyle;
  iconStyle?: StyleProp<any>;
  titleStyle?: TextStyle;
  //dùng icon của AntDesign
  icon?: string;
  onPress?: () => void;
  rightIcon?: string;
}

const Button: React.FC<Props> = ({size, type, ...props}) => {
  // Dựa vào option để chọn kiểu CSS tương ứng
  const containerStyle = StyleSheet.flatten([
    styles.container,
    size === 'small' && {height: SIZE.size28},
    size === 'medium' && {height: SIZE.size36},
    size === 'large' && {height: SIZE.size48},
    size === 'iconOnly' && {
      height: SIZE.size36,
      width: SIZE.size36,
      borderRadius: SIZE.size50,
    },
    //type
    type === 'disabled' && {backgroundColor: theme.color.colorCccccc},
    type === 'primary' && {backgroundColor: theme.color.background_primary},
    type === 'secondary' && {
      backgroundColor: theme.color.secondary,
    },
    type === 'danger' && {backgroundColor: theme.color.colorF5222d},
    type === 'warning' && {backgroundColor: theme.color.colorFa541c},
    type === 'success' && {backgroundColor: theme.color.color52c41a},
    type === 'outline' && {
      backgroundColor: theme.color.colorFFFFFF,
      borderColor: theme.color.background_primary,
      borderWidth: 1,
    },
  ]);

  const textStyle = StyleSheet.flatten([
    styles.titleButton,
    size === 'small' && {fontSize: SIZE.size12},
    size === 'medium' && {fontSize: SIZE.size14},
    size === 'large' && {fontSize: SIZE.size16},
    size === 'iconOnly' && {fontSize: SIZE.size18},

    //type
    type === 'secondary' && {color: theme.color.color333333},
    type === 'disabled' && {color: theme.color.color999999},
    type === 'outline' && {color: theme.color.background_primary},
  ]);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[containerStyle, props.buttonStyle]}
      disabled={type === 'disabled'}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.icon && (
          <Icon
            name={props.icon}
            style={[textStyle, props.titleStyle, props.iconStyle]}
          />
        )}
        <Text style={[textStyle, props.titleStyle]}>{props.title}</Text>
        {props.rightIcon && (
          <Icon
            name={props.rightIcon}
            style={[textStyle, props.titleStyle, props.iconStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZE.size8,
  },
  titleButton: {
    fontWeight: 'bold',
    color: theme.color.colorFFFFFF,
  },
});
