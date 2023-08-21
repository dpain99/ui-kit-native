import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export default interface typeInput {
  value?: any;
  onChangeValue?: any;
  placeHolder?: string;
  colorPlaceHolder?: string;
  texCancel?: string;
  textCancelStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  errorMess?: string;
  numberOfLine?: number;
  isMultiline?: boolean;
  keyboardType?: any;
  dataDropDown?: dataDropDownType[];
  editable?: any;
  autoFocus?: any;
  passWord?: boolean;
}
export type dataDropDownType = {
  id: number;
  value: string;
};
export const name_Input = {
  passWord: 'passWord',
  searchInput: 'searchInput',
  inputText: 'inputText',
  dropDown: 'dropDown',
};
