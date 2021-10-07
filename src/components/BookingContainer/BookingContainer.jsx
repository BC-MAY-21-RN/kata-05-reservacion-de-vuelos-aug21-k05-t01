import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './BookingContainerStyle';
import Trip from '../Trip/Trip';

const BookingContainer = ({returnBtn, next, children, flyData}) => {
  return(
    <View style={styles.bookingContainer}>
      <View style={styles.iconRowContainer}>
        <TouchableOpacity onPress={returnBtn} style={styles.iconContainer}>
          <Icon 
            name='chevron-back-outline'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.flyData}>
        <Trip {...flyData} />
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text='Next' onPress={next}/>
      </View>
    </View>
  ); 
};

export default BookingContainer;
