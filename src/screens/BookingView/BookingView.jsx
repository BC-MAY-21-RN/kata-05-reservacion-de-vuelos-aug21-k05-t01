import React from 'react';
import {View, Text, Alert} from 'react-native';
import BookingContainer from '../../components/BookingContainer/BookingContainer';

const BookingView = () => {
  return(
    <BookingContainer
      returnBtn={() => Alert.alert('return')}
      next={() => Alert.alert('next')}
    >
      <Text>Content</Text>
    </BookingContainer>
  );
};

export default BookingView;