import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 8,
  },
  title: {
    color: colors.blue,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 23,
  },
  centerSelf: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: colors.lightGray,
  },
  textInputLabel: {
    marginBottom: 5,
    marginRight: 6,
    color: colors.lightGray,
  },
  passwordMessage: {
    color: colors.lightGray,
    fontSize: 12,
    marginBottom: 25,
  },
  checkBoxContainer: {
    marginBottom: 30,
  },
  labelContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.lightGray,
  },
  sectionIn: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row'
  }
});
