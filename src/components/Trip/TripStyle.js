import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    width: '99%',
    padding: 5,
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '98%',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
  },
  textLeft: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textRight: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    color: colors.blue,
    fontSize: 20,
    marginTop: 8,
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 12,
    color: colors.lightGray,
  },
  dateText: {
    padding: 5,
    color: colors.lightGray,
  }
})

