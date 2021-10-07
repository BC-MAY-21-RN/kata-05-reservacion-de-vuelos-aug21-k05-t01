import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './TextLabelBookingStyles';

const TextLabelBooking = ({text}) =>{ 
  return (
    <View style={styles.rowText}>
      <Text style={styles.textInputLabel}>Where are you now?</Text>
    </View>
  );
};
export default TextLabelBooking;
