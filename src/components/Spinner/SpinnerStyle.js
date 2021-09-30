import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  spinnerContainer: {
    top: -10,
    backgroundColor: colors.light_black,
    width: 110,
    height: 130,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 15,
  }
});
