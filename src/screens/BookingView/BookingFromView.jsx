import React, {useState} from 'react';
import {Text} from 'react-native';
import BookingContainer from '../../components/BookingContainer/BookingContainer';
import TextCountry from '../../components/TextCountry/TextCountry';

const BookingFromView = ({navigation, route}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleNext = () => {
    navigation.navigate('BookingDate', {
      ...route.params,
      ...selectedOption,
    });
  };

  const handleReturn = () => navigation.goBack();

  const handleChange = (selectedItem) => {
    const [fromCountryName, city] = selectedItem.split(',');
    const fromCountryCode = city.substring(0, 4).toUpperCase();
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