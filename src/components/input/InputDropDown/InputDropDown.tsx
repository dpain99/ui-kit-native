import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import typeInput from '../type';
import stylesInput from '../styleInputBase';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../../assets/theme/theme';
import IconGreen from '../../IconGreen/IconGreen ';
import {nameIcon} from '../../IconGreen/type';
type datatype = {
  id: number;
  value: string;
};
const InputDropDown = (props: typeInput) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownSizeAndPosition, setDropdownSizeAndPosition] = useState<any>({
    _w: '100%',
    _px: 0,
    top: 0,
  });
  const DropdownButton = useRef<any>();
  const toggleDropdown = () => {
    isVisible ? setIsVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownSizeAndPosition({_w, _px, top: py + h});
      },
    );
    setIsVisible(true);
  };
  const onItemPress = (item: datatype) => {
    setIsVisible(false);
    props.onChangeValue(item.value);
  };

  const renderItem = ({item}: {item: datatype}) => (
    <TouchableOpacity
      style={stylesInput.item}
      onPress={() => onItemPress(item)}>
      <Text style={{}}>{item.value}</Text>
    </TouchableOpacity>
  );
  return (
    <View ref={DropdownButton}>
      {props.label && (
        <View style={stylesInput.viewLabel}>
          <Text style={stylesInput.labelTxt}>{props.label}</Text>
        </View>
      )}
      <View style={[props.containerStyle, stylesInput.container]}>
        <View style={stylesInput.inputStyle}>
          <TextInput
            style={stylesInput.input}
            placeholder={props.placeHolder}
            onChangeText={props.onChangeValue}
            numberOfLines={1}
            placeholderTextColor={
              props.colorPlaceHolder ?? theme.color.color_placeHolder
            }
            keyboardType={props.keyboardType}
            value={props.value}
            multiline={props.isMultiline ?? false}
            underlineColorAndroid={'transparent'}
            autoFocus={props.autoFocus}
            pointerEvents={props.editable === false ? 'none' : 'auto'}
          />
          <TouchableOpacity onPress={() => toggleDropdown()}>
            <Feather
              name={'chevron-down'}
              size={20}
              color={theme.color.color818181}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal testID={'modal'} visible={isVisible} transparent>
        <TouchableOpacity
          style={stylesInput.overlay}
          onPress={() => setIsVisible(false)}>
          <View
            style={[
              stylesInput.dropdown,
              {
                top: dropdownSizeAndPosition.top,
                width: dropdownSizeAndPosition._w,
                left: dropdownSizeAndPosition._px - 16,
              },
            ]}>
            <FlatList
              style={{maxHeight: 300}}
              data={props.dataDropDown}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            {props.errorMess && (
              <View style={stylesInput.viewError}>
                <IconGreen name={nameIcon.trendingDown} />
                <Text style={stylesInput.textError}>{props.errorMess}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(InputDropDown);
