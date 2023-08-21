import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesInput from '../styleInputBase';
import typeInput from '../type';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../../assets/theme/theme';
import IconGreen from '../../IconGreen/IconGreen ';
import {nameIcon} from '../../IconGreen/type';

const FormInput = (props: typeInput) => {
  const [isHide, setIsHide] = useState<boolean>(true);

  return (
    <View>
      {props.label && (
        <View style={stylesInput.viewLabel}>
          <Text style={stylesInput.labelTxt}>{props.label}</Text>
        </View>
      )}
      <View style={[props.containerStyle, stylesInput.container]}>
        <View style={stylesInput.inputStyle}>
          {props?.iconLeft}
          <TextInput
            secureTextEntry={props.passWord ? isHide : false}
            style={stylesInput.input}
            placeholder={props.placeHolder}
            placeholderTextColor={
              props.colorPlaceHolder ?? theme.color.color_placeHolder
            }
            onChangeText={props.onChangeValue}
            value={props.value}
            multiline={props.isMultiline ?? false}
            keyboardType={props.keyboardType}
            editable={props.editable}
            underlineColorAndroid={'transparent'}
            autoFocus={props.autoFocus}
            pointerEvents={props.editable === false ? 'none' : 'auto'}
          />
          {props?.iconRight}
          {props.passWord && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsHide(!isHide)}>
              {isHide ? (
                <IconGreen
                  style={{backgroundColor: theme.color.colorFFFFFF}}
                  name={nameIcon.eye}
                />
              ) : (
                <IconGreen
                  style={{backgroundColor: theme.color.colorFFFFFF}}
                  name={nameIcon.eyeOff}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {props.errorMess && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather
            name="alert-triangle"
            size={20}
            color={theme.color.colorF20b0b}
          />
          <Text style={stylesInput.textError}>{props.errorMess}</Text>
        </View>
      )}
    </View>
  );
};

export default FormInput;
