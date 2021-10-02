import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
  },
  activityButton: {
    backgroundColor: '#b6b7ba',
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textButon: {
    fontSize: 15,
    color: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700'
  }
});
