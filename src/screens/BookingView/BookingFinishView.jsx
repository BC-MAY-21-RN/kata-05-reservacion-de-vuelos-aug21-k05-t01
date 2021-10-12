import React from 'react';
import {Text, View} from 'react-native';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import BookingTitle from '../../components/BookingTitle/BookingTitle';

const BookingFinish = ({navigation, route}) => {
  const handleBtn = () => navigation.navigate('MyFlights');
  const flyData = route.params;

  return(
    <BookingContainer
      next={handleBtn}
      returnBtn={handleBtn}
      flyData={flyData}
    >
      <BookingTitle>Your request was received.</BookingTitle>
    </BookingContainer>
  );
};

export default BookingFinish;