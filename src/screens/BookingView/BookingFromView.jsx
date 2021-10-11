import React, {useState} from 'react';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import TextCountry from '../../components/TextCountry/TextCountry';
import {getSelectedCountryAndCode} from '../../util/bookingUtils';

const BookingFromView = ({navigation, route}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleNext = () => {
    navigation.navigate('BookingTo', {
      ...route.params,
      ...selectedOption,
    });
  };

  const handleReturn = () => navigation.goBack();

  const handleChange = (selectedItem) => {
    const [fromCountryName, fromCountryCode] = getSelectedCountryAndCode(selectedItem); 
    setSelectedOption({fromCountryName, fromCountryCode});
  };

  return(
    <BookingContainer
      next={handleNext}
      returnBtn={handleReturn}
    >
      <TextCountry
        onChange={handleChange}
      />
    </BookingContainer>
  );
};

export default BookingFromView;