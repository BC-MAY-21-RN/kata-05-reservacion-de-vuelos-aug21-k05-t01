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

  textInputLabel: {
    fontWeight: 'bold',
    width: '70%',
    fontSize: 40,
    color: colors.black,
  },
  rowBoxPassenger: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  buttonTextTwo: {
    color: colors.white,
    fontSize: 35,
    top: -13,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    width: 80,
    margin: 10,
    height: 45,
    borderRadius: 8,
  },
  textPassenger: {
    fontWeight: 'bold',
    fontSize: 50,
    margin: 10,
    padding: 15,
    top: -30,
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
  },
});
