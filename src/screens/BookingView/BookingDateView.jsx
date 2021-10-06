import React, {useState} from 'react';
import {Alert} from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import BookingContainer from '../../components/BookingContainer/BookingContainer';

const BookingDateView = () => {
  const [selectedDate, setSelectedDate] = useState({startDate: '', endDate: ''});
  const handleNext = () => Alert.alert('Next');
  const handleReturn = () => Alert.alert('return');
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
      <Calendar 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </BookingContainer>
  );
};

export default BookingDateView;