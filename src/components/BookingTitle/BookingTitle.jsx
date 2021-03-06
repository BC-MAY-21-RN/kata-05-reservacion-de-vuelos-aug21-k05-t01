import React from 'react';
import {Text} from 'react-native';
import {styles} from './BookingTitleStyle';

const BookingTitle = ({children}) => {
  return(
    <Text style={styles.bookingTitle}>{children}</Text>
  );
};

export default BookingTitle;
