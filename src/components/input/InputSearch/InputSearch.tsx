import {StyleSheet, Text, TextInput, View} from 'react-native';
import stylesInput from '../styleInputBase';
import typeInput from '../type';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../../assets/theme/theme';

const InputSearch = (props: typeInput) => {
  return (
    <View>
      <View style={props?.containerStyle ?? stylesInput.container}>
        <View style={stylesInput.inputStyle}>
          {props?.iconLeft}
          <TextInput
            style={stylesInput.input}
            placeholder={props.placeHolder}
            placeholderTextColor={
              props.colorPlaceHolder ?? theme.color.color_placeHolder
            }
            onChangeText={props.onChangeValue}
            keyboardType={props.keyboardType}
            value={props.value}
            multiline={props.isMultiline ?? false}
          />
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

export default InputSearch;

const styles = StyleSheet.create({});
