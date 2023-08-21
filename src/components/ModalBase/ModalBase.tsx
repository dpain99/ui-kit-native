import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import {SIZE} from '../../assets/theme/theme';
interface PropsModal {
  isVisible: boolean;
  onClose: () => void;
  headerView?: React.ReactNode;
  bodyView: React.ReactNode;
  footerView?: React.ReactNode;
  styleProps?: ViewStyle;
  positon: 'center' | 'bottom' | 'top';
  animationIn?:
    | 'bounce'
    | 'flash'
    | 'jello'
    | 'pulse'
    | 'rotate'
    | 'rubberBand'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInUp'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutUp'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInDownBig'
    | 'fadeInUp'
    | 'fadeInUpBig'
    | 'fadeInLeft'
    | 'fadeInLeftBig'
    | 'fadeInRight'
    | 'fadeInRightBig'
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutDownBig'
    | 'fadeOutUp'
    | 'fadeOutUpBig'
    | 'fadeOutLeft'
    | 'fadeOutLeftBig'
    | 'fadeOutRight'
    | 'fadeOutRightBig'
    | 'flipInX'
    | 'flipInY'
    | 'flipOutX'
    | 'flipOutY'
    | 'lightSpeedIn'
    | 'lightSpeedOut'
    | 'slideInDown'
    | 'slideInUp'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideOutDown'
    | 'slideOutUp'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInUp'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutUp'
    | 'zoomOutLeft'
    | 'zoomOutRight';
  animationOut?:
    | 'bounce'
    | 'flash'
    | 'jello'
    | 'pulse'
    | 'rotate'
    | 'rubberBand'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInUp'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutUp'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInDownBig'
    | 'fadeInUp'
    | 'fadeInUpBig'
    | 'fadeInLeft'
    | 'fadeInLeftBig'
    | 'fadeInRight'
    | 'fadeInRightBig'
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutDownBig'
    | 'fadeOutUp'
    | 'fadeOutUpBig'
    | 'fadeOutLeft'
    | 'fadeOutLeftBig'
    | 'fadeOutRight'
    | 'fadeOutRightBig'
    | 'flipInX'
    | 'flipInY'
    | 'flipOutX'
    | 'flipOutY'
    | 'lightSpeedIn'
    | 'lightSpeedOut'
    | 'slideInDown'
    | 'slideInUp'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideOutDown'
    | 'slideOutUp'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInUp'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutUp'
    | 'zoomOutLeft'
    | 'zoomOutRight';
  animationInTiming?: number | 0;
  animationOutTiming?: number | 0;
}
const ModalBase = (props: PropsModal) => {
  const {onClose} = props;
  const [height, setHeight] = useState(0);

  const onLayout = (e: any) => {
    if (height == 0) {
      setHeight(e.nativeEvent.layout.height);
    }
  };

  const getStyle = () => {
    switch (props.positon) {
      case 'center':
        return [styles.center];
      case 'bottom':
        return [styles.bottom, height >= SIZE.screenHeight ? {top: 60} : {}];
      case 'top':
        return styles.top;
      default:
        return styles.center;
    }
  };
  return (
    <Modal
      {...props}
      deviceWidth={-1}
      deviceHeight={-1}
      isVisible={props.isVisible}
      onBackButtonPress={() => onClose()}
      onBackdropPress={() => onClose()}
      animationIn={props.animationIn ? props.animationIn : 'fadeInUp'}
      animationOut={props.animationOut ? props.animationOut : 'fadeOutDown'}
      animationInTiming={
        props.animationInTiming ? props.animationInTiming : 500
      }
      animationOutTiming={
        props.animationOutTiming ? props.animationOutTiming : 500
      }>
      <View style={[getStyle(), props.styleProps]} onLayout={onLayout}>
        {props.headerView}
        {props.bodyView}
        {props.footerView}
      </View>
    </Modal>
  );
};

export default ModalBase;

const styles = StyleSheet.create({
  center: {
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    width: SIZE.screenWidth - 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  bottom: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    alignSelf: 'auto',
    bottom: 0,
    position: 'absolute',
    width: SIZE.screenWidth,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  top: {
    alignSelf: 'auto',
    top: 0,
    position: 'absolute',
    width: SIZE.screenWidth,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
});
