import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  bookingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 55,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  iconRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  icon: {
    fontSize: 30,
    color: colors.blue,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  flyData: {
    marginTop: 10,
  },
});
