import React, {useState, useEffect} from 'react';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import BookingTitle from '../../components/BookingTitle/BookingTitle';
import {registerFlight} from '../../library/methods/firebaseBooking';
import Spinner from '../../components/Spinner/Spinner';

const BookingFinish = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const handleBtn = () => navigation.navigate('MyFlights');
  const flyData = route.params;

  useEffect(async() => {
    setLoading(true);
    await registerFlight(flyData);
    setLoading(false);
  }, []);

  return(
    <>
      {loading && <Spinner text='Registering the flight...'/>}
      <BookingContainer
        next={handleBtn}
        returnBtn={handleBtn}
        flyData={flyData}
      >
        <BookingTitle>Your request was received.</BookingTitle>
      </BookingContainer>
    </>
  );
};

export default BookingFinish;
