import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../core-constants/colors';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Dimensions.get('screen').height / 5,
  },
  alignCenter: {alignItems: 'center'},
  inputView: {marginHorizontal: 15, paddingVertical: 15},
  buttonView: {marginHorizontal: 15, paddingVertical: 30},
  flex1: {flex: 1},
});
