import {StyleSheet} from 'react-native';
import {colors} from '../../util/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    color: '#5c6df8',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    height:'95%',
  },
  cartInfo: {
    backgroundColor: 'red',
    borderBottomColor: colors.black,
    borderBottomWidth: 5,
  },
  sectionLine: {
    marginTop: 12,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    width: '100%',
  },
  sectionCreate:{
   top:-120,
   alignItems: 'center',
  },
  icon: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 80,
    marginTop: 8,
    left: 5,
    alignItems: 'center',
  },
});
