import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import Calendar from '../../components/Calendar/Calendar';

const BookingView = () => {
  const [selectedDate, setSelectedDate] = useState({startDate: '', endDate: ''});

  return(
    <BookingContainer
      returnBtn={() => Alert.alert('return')}
      next={() => Alert.alert('next')}
    >
      <Calendar 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </BookingContainer>
  );
};

export default BookingView;
