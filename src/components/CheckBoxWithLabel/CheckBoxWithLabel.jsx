import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';
import {styles} from './CheckBoxWithLabelStyle';

const CheckBoxWithLabel = ({value, changeValue, children, disabled = false}) => {
  return(
    <View
      style={styles.checkBoxContainer}
    >
      <CheckBox 
        disabled={disabled}
        value={value}
        tintColors={{true: '#5c6ef8'}}
        onValueChange={(newValue) => changeValue(newValue)}
      />
      <Text
        style={styles.checkBoxText}  
      >
        {children}
      </Text>
    </View>
  );
};

export default CheckBoxWithLabel;
