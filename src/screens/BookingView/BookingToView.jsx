import React, {useState} from 'react';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import TextCountry from '../../components/TextCountry/TextCountry';
import {getSelectedCountryAndCode} from '../../util/bookingUtils';

const BookingToView = ({navigation, route}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleNext = () => {
    navigation.navigate('BookingDate', {
      ...route.params,
      ...selectedOption,
    });
  };

  const handleReturn = () => navigation.goBack();

  const handleChange = (selectedItem) => {
    const [toCountryName, toCountryCode] = getSelectedCountryAndCode(selectedItem); 
    setSelectedOption({toCountryName, toCountryCode});
  };

  const flyData = route.params;

  return(
    <BookingContainer
      next={handleNext}
      returnBtn={handleReturn}
      flyData={flyData}
    >
      <TextCountry
        onChange={handleChange}
        text='Where will you be flying to?'
      />
    </BookingContainer>
  );
};

export default BookingToView;