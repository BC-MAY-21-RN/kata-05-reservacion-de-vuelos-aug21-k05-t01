import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 700,
  },
  rowText: {
    left: 40,
    top: -50,
  },
  textInputLabel: {
    fontWeight: 'bold',
    width: '70%',
    fontSize: 40,
    color: colors.black,
  },
  rowBoxSelect: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonSelect: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
    width: '90%',
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
