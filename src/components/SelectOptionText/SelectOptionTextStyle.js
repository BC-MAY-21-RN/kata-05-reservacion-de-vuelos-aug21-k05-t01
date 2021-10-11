import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  buttonSelect: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
    width: '95%',
  },
  buttonSelectNext: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    borderBottomColor: colors.blue,
    borderBottomWidth: 2,
    width: '90%',
  },
  textSelect: {
    textAlign: 'left',
    fontSize: 19,
    color: colors.lightGray,
  },
  textSelectText: {
    textAlign: 'left',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
