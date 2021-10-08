import React from 'react';
import {ScrollView, Text, Alert} from 'react-native';
import TextCountry from '../../components/TextCountry/TextCountry';

const MyFlightsView = () => {
  return (
    <ScrollView>
      <TextCountry 
        onChange={(item) => Alert.alert(`You choosed: ${item}`)}
      />
    </ScrollView>
  );
};

export default MyFlightsView;
