import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './PassengerStyle';

const TouchableOutline = ({ iconName, oneMorePassanger }) => {
  return (
    <TouchableOpacity onPress={oneMorePassanger} style={styles.button}>
      <Icon name={iconName} style={styles.icon} />
    </TouchableOpacity>
  )
}

const Passenger = ({passenger, setPassenger}) => {
  const oneMorePassanger = () => passenger < 5 ? setPassenger(passenger + 1) : passenger;
  const onePassengerLess = () => passenger > 1 ? setPassenger(passenger - 1) : passenger;

  return (
    <View style={styles.container}>
      <View style={styles.rowBoxPassenger}>
        <TouchableOutline iconName="remove-outline" oneMorePassanger={onePassengerLess} />
        <Text style={styles.textPassenger}>{passenger}</Text>
        <TouchableOutline iconName="add-outline" oneMorePassanger={oneMorePassanger} />
      </View>
    </View>
  );
};

export default Passenger;
