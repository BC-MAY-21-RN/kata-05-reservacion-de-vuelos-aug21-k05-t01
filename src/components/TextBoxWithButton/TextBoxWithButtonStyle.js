import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginBottom: 15,
    paddingLeft: 12,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 2,
    right: 15,
    top: 8,
  },
  icon: {
    fontSize: 30,
    color: '#4d4d4d',
  },
});
