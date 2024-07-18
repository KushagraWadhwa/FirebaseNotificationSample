import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants/colors';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.white,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  statusText: {color: colors.white, alignSelf: 'center'},
  contact: {color: colors.golden, fontSize: 30},
  network: {color: colors.white, marginLeft: 10},
  server: {color: colors.white, marginLeft: 10, marginTop: 10},
  cameras: {color: colors.white, marginLeft: 10, marginTop: 10},
  buttonView: {marginHorizontal: 10, marginTop: 40},
  buttonRow1: {flexDirection: 'row', justifyContent: 'space-between'},
  buttonRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
