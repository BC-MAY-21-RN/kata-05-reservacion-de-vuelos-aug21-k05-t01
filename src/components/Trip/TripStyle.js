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
    fontSize: 26,
  },
  textRight: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 26,
  },
  icon: {
    color: colors.blue,
    fontSize: 30,
    marginTop: 8,
    left:5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.lightGray,
  },
  countryLeft: {
    fontSize: 16,
    color: colors.lightGray,
    alignItems: 'flex-start',
  },  
  countryRight: {
    fontSize: 16,
    color: colors.lightGray,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  dateText: {
    padding: 5,
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
  rowSectionDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colBox: {
    width: '33%',
  }
})
