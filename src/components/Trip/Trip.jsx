import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './TripStyle';

const Contry = ({ code, name, textDirection }) => {
  return (
    <View style={styles.colBox}>
      <Text style={textDirection}>{code}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const Trip = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Contry code='BEG' name='Serbia' textDirection={styles.textLeft} />
        <Icon
          name={'airplane'}
          style={styles.icon}
        />
        <Contry code='AMS' name='Netherlands' textDirection={styles.textRight} />
      </View>
      <Text style={styles.dateText}>Septiember 3,2021</Text>
    </View>
  )
}

export default Trip;

