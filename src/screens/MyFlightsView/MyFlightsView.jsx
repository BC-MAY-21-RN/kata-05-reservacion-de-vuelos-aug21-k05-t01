import React from 'react';
import {ScrollView, Text} from 'react-native';
import {TextCountry} from '../../components/TextCountry/TextCountry';

const MyFlightsView = () => {
  return(
    <ScrollView>
      <Text>My Flights</Text>
      <TextCountry></TextCountry>
    </ScrollView>
  );
};

export default MyFlightsView;
