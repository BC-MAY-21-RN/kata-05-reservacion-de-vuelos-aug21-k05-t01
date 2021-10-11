import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './PassengerStyle';
import TextLabelBooking from '../TextLabeBooking/TextLabelBooking';

const TouchableOutline = ({ iconName, oneMorePassanger }) => {
  return (
    <TouchableOpacity onPress={oneMorePassanger} style={styles.button}>
      <Icon name={iconName} style={styles.icon} />
    </TouchableOpacity>
  )
}

export const Passenger = () => {
  const [passenger, setPassenger] = useState(1);
  const oneMorePassanger = () => passenger < 5 ? setPassenger(passenger + 1) : passenger;
  const onePassengerLess = () => passenger > 1 ? setPassenger(passenger - 1) : passenger;

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextLabelBooking
          style={styles.textInputLabel}
          text="How many passengers?"
        />
        <View style={styles.rowBoxPassenger}>
          <TouchableOutline iconName="remove-outline" oneMorePassanger={onePassengerLess} />
          <Text style={styles.textPassenger}>{passenger}</Text>
          <TouchableOutline iconName="add-outline" oneMorePassanger={oneMorePassanger} />
        </View>
      </View>
    </ScrollView>
  );
};
