import React from 'react';
import {View, Text, StyleSheet, ViewProps, StyleProp} from 'react-native';
import {SIZE, theme} from '../../assets/theme/theme';

interface DividerProps extends ViewProps {
  tittle?: string;
  sx?: StyleProp<any>;
}
const Divider = (props: DividerProps) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.colorFFFFFF,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: theme.color.color333333,
      ...props.sx,
    },
    text: {
      marginHorizontal: SIZE.size10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      {props.children !== undefined && (
        <View style={styles.text}>{props.children}</View>
      )}
      <View style={styles.divider} />
    </View>
  );
};

export default Divider;
