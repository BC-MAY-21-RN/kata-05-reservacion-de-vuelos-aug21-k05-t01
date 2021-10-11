import React from 'react';
import {Text, View} from 'react-native';
import BookingContainer from '../../components/BookingContainer/BookingContainer';

const BookingFinish = ({navigation, route}) => {
  const data = route.params;
  return(
    <View>
      <Text>
        {JSON.stringify(data)}
      </Text>
    </View>
  );
};

export default BookingFinish;