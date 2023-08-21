import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps} from 'react-native';
import {SIZE, theme} from '../../assets/theme/theme';

interface LayoutContainerProps extends ViewProps {
  sx?: StyleProp<any>;
  sxInferior?: StyleProp<any>;
}
const LayoutContainer = (props: LayoutContainerProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.colorFFFFFF,
      ...props.sxInferior,
    },
    child: {
      paddingHorizontal: SIZE.size16,
      ...props.sx,
    },
  });
  return (
    <View style={styles.container} {...props}>
      <View style={styles.child}>{props.children}</View>
    </View>
  );
};
export default LayoutContainer;
