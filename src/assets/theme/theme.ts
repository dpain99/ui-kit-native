import {Dimensions, TextStyle, ViewStyle} from 'react-native';

const {height, width} = Dimensions.get('screen');
export const theme = {
  color: {
    background_primary: '#75AD42',
    secondary: '#DFEFD1',
    header_primary: '#FDF7F2',
    color333333: '#333333',
    color_placeHolder: 'rgba(51, 51, 51, 0.3)',
    color_placeholder: '#676767',
    color_disable: '#676767',
    colorEfEfEf: '#EFEFEF',
    colorFFFFFF: '#FFFFFF',
    colorF5222d: '#f5222d',
    colorFa541c: '#fa541c',
    color52c41a: '#52c41a',
    colorCccccc: '#cccccc',
    colorF20b0b: '#F20B0B',
    colorCaCaCa: '#CACACA',
    color818181: '#818181',
    color3DB5CA: '#3DB5CA',
    colorE9D8A3: '#E9D8A3',
    colorFE7814: '#FE7814',
    colorFED6B8: '#FED6B8',
    colorF6ECE1: '#F6CEC1',
    color000000: '#000000',
    colorFA0615: '#FA0615',
    color999999: '#999999',
    colorE6e6e6: '#e6e6e6',
    colorYellow: 'yellow',
  },
};
export const SIZE = {
  size4: 4,
  size5: 5,
  size6: 6,
  size8: 8,
  size10: 10,
  size12: 12,
  size13: 13,
  size14: 14,
  size16: 16,
  size18: 18,
  size19: 19,
  size20: 20,
  size24: 24,
  size26: 26,
  size28: 28,
  size30: 30,
  size36: 36,
  size40: 40,
  size48: 48,
  size50: 50,
  screenWidth: width,
  screenHeight: height,
};
// interface FonTWeight {
//   regular16?: TextStyle;
//   semibold16?: TextStyle;
//   semibold20?: TextStyle;
// }
// const fontWeight: FonTWeight = {
//   regular16: {
//     fontWeight: '400',
//     fontFamily: 'Roboto',
//     lineHeight: 22,
//   },
//   semibold20:{
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//     lineHeight: 24,
//   },
//   semibold16:{
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//     lineHeight: 22,
//   }
// };
