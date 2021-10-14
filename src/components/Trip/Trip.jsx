import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './TripStyle';
import {parsedMonths} from '../../util/bookingUtils';

const Country = ({code, name, textDirection, countryDirection}) => {
  return (
    <View style={styles.colBox}>
      <Text style={textDirection}>{code}</Text>
      <Text style={countryDirection}>{name}</Text>
    </View>
  );
};

const Trip = ({
  date = null,
  passenger=0,
  fromCountryCode = '',
  fromCountryName = '',
  toCountryCode,
  toCountryName,
}) => {

  const parseDate = (date) => {
    const parsedDate = `${parsedMonths[date.month]} ${date.day}, ${date.year}`
    return parsedDate;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Country
          code={fromCountryCode}
          name={fromCountryName}
          textDirection={styles.textLeft}
          countryDirection={styles.countryLeft}
        />
        <Icon name={'airplane'} style={styles.icon} />
        <Country
          code={toCountryCode}
          name={toCountryName}
          textDirection={styles.textRight}
          countryDirection={styles.countryRight}
        />
      </View>
      <View style={styles.rowSectionDate}>
        <Text style={styles.dateText}>{date ? parseDate(date): ''}</Text>
        <Text style={styles.dateText}>{passenger == 0 ? '' : `${passenger} passengers`}</Text>
      </View>
    </View>
  );
};

export default Trip;
