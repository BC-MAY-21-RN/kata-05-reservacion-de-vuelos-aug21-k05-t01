import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
  },
  enabled: {
    backgroundColor: colors.enabled_button
  },
  disabled: {
    backgroundColor: colors.disabled_button,
  },
  textButon: {
    fontSize: 15,
    color: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700'
  }
});
