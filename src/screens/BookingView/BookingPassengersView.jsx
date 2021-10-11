import React, {useState} from 'react';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import BookingTitle from '../../components/BookingTitle/BookingTitle';
import PassengerSelector from '../../components/Passenger/Passenger';

const BookingPassengersView = ({navigation, route}) => {
  const [passengersNum, setPassengersNum] = useState(1);

  const handleNext = () => {
    navigation.navigate('BookingFinish', {
      ...route.params,
      passengersNum,
    });
  };  

  const flyData = route.params;

  return(
    <BookingContainer
      next={handleNext}
      returnBtn={() => navigation.goBack()}
      flyData={flyData}      
    >
      <BookingTitle>How many passengers?</BookingTitle>
      <PassengerSelector 
        passenger={passengersNum}
        setPassenger={setPassengersNum}
      />
    </BookingContainer>
  );
};

export default BookingPassengersView;