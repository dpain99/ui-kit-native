import {StyleSheet} from 'react-native';
import {SIZE, theme} from '../../assets/theme/theme';
const stylesInput = StyleSheet.create({
  input: {
    height: SIZE.size48,
    flex: 1,
    fontSize: SIZE.size16,
    color: theme.color.color333333,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZE.size16,
  },
  container: {
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZE.size8,
    height: SIZE.size48,
    borderColor: theme.color.colorCaCaCa,
    backgroundColor: theme.color.colorFFFFFF,
  },
  textError: {
    color: theme.color.colorF20b0b,
    fontSize: SIZE.size13,
  },
  viewLabel: {
    paddingBottom: SIZE.size16,
  },
  labelTxt: {
    fontSize: SIZE.size16,
    color: theme.color.color333333,
    fontWeight: '700',
  },
  viewError: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SIZE.size10,
  },
  viewModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  dropdown: {
    marginHorizontal: SIZE.size16,
    position: 'absolute',
    borderColor: theme.color.colorCaCaCa,
    backgroundColor: theme.color.colorFFFFFF,
    borderWidth: 1,
    borderRadius: SIZE.size8,
    width: '100%',
    shadowColor: theme.color.color000000,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  item: {
    paddingHorizontal: SIZE.size10,
    paddingVertical: SIZE.size5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
});
export default stylesInput;
