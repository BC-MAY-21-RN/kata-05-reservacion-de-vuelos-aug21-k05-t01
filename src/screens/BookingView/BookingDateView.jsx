import React, {useState} from 'react';
import {Alert} from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import BookingTitle from '../../components/BookingTitle/BookingTitle';

const BookingDateView = ({navigation, route}) => {
  const [selectedDate, setSelectedDate] = useState({startDate: '', endDate: ''});
  const handleNext = () => {
    navigation.navigate('passengers', {
      ...route.params,
      selectedDate,
    });
  };
  const handleReturn = () => navigation.goBack();
  const flyData = {
    date: '10 october 2021',
    fromCountryCode: 'BEG',
    fromCountryName: 'Serbia',
    toCountryCode: 'AMS',
    toCountryName: 'Netherlands',
  };

  return(
    <BookingContainer
      next={handleNext}
      returnBtn={handleReturn}
      flyData={flyData}
    >
      <BookingTitle>Select date</BookingTitle>
      <Calendar 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </BookingContainer>
  );
};

export default BookingDateView;
