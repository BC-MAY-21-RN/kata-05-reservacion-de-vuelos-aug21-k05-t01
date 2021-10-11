import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './PassengerStyle';
import TextLabelBooking from '../TextLabeBooking/TextLabelBooking';

export const Passenger = () => {
  const [passenger, setPassenger] = useState(1);
  const oneMorePassanger = () => {
    if (passenger < 5) {
      setPassenger(passenger + 1);
    }
  };

  const onePassengerLess = () => {
    if (passenger > 1) {
      setPassenger(passenger - 1);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextLabelBooking
          style={styles.textInputLabel}
          text="How many passengers?"
        />
        <View style={styles.rowBoxPassenger}>
          <TouchableOpacity onPress={onePassengerLess} style={styles.button}>
            <Icon name="remove-outline" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.textPassenger}>{passenger}</Text>
          <TouchableOpacity onPress={oneMorePassanger} style={styles.button}>
            <Icon name="add-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
