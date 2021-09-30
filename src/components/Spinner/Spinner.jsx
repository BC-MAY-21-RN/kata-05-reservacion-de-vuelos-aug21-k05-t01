import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './SpinnerStyle';
import {colors} from '../../util/colors';

const Spinner = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={colors.blue}/>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
};

export default Spinner;
