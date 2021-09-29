import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../screens/RegisterView/RegisterViewStyle';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const InputLabel = ({children, errorMessages}) => {
  return(
    <View style={styles.flexRow}>
      <Text style={styles.textInputLabel}>{children}</Text>
      <ErrorMessage errorMessages={errorMessages}/>
    </View>
  );
};

export default InputLabel;
