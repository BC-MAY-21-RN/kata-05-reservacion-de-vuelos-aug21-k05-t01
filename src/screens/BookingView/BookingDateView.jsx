import React, {useState} from 'react';
import Calendar from '../../components/Calendar/Calendar';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import BookingTitle from '../../components/BookingTitle/BookingTitle';

const BookingDateView = ({navigation, route}) => {
  const [selectedDate, setSelectedDate] = useState({startDate: '', endDate: ''});

  const handleNext = () => {
    const dateObject = new Date(selectedDate.startDate);
    const date = {
      day: dateObject.getDate(),
      month: dateObject.getMonth() + 1,
      year: dateObject.getFullYear(),
    };
    navigation.navigate('BookingPassengers', {
      ...route.params,
      date,
    });
  };
  
  const handleReturn = () => navigation.goBack();
  const flyData = route.params;

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
