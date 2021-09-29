import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from './ErrorMessageStyle';

const ErrorMessage = ({errorMessages}) => {
  return(
    <View style={styles.container}>
      {errorMessages && errorMessages.map((message, index) => (
        <Text key={index} style={styles.label}>*{message}</Text>
      ))}
    </View>
  );
};

export default ErrorMessage;