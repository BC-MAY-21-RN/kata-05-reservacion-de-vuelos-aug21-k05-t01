import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './TripStyle';

const Country = ({ code, name, textDirection }) => {
  return (
    <View style={styles.colBox}>
      <Text style={textDirection}>{code}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const Trip = ({date = '', fromCountryCode = '', fromCountryName = '', toCountryCode, toCountryName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Country code={fromCountryCode} name={fromCountryName} textDirection={styles.textLeft} />
        <Icon
          name={'airplane'}
          style={styles.icon}
        />
        <Country code={toCountryCode} name={toCountryName} textDirection={styles.textRight} />
      </View>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  )
}

export default Trip;

