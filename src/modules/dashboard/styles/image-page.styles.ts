import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants/colors';

export const Styles = StyleSheet.create({
  title: {color: colors.red, marginHorizontal: 10, fontSize: 20},
  backText: {
    fontSize: 20,
    color: colors.golden,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  viewStyle: {backgroundColor: colors.black},
  imageStyle: {paddingHorizontal: 10},
  videoStyle: {width: '100%', height: 200},
  attend: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  btnPress: {
    borderColor: colors.green,
    backgroundColor: 'rgb(60, 169, 108)',
    padding: 10,
    alignItems: 'center',
  },
  attendText: {color: colors.white, fontWeight: 'bold'},
  VideoBtn: {
    borderColor: colors.red,

    backgroundColor: 'rgb(255, 96, 77)',
    padding: 10,
    alignItems: 'center',
  },
  videoText: {color: colors.white, fontWeight: 'bold'},
  actionText: {
    color: colors.red,
    marginHorizontal: 10,
    fontSize: 20,
    marginTop: 30,
  },
});
