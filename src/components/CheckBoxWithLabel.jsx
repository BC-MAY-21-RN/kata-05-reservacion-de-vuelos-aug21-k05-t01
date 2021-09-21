import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  checkBoxText: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#4d4d4d',
  },
  checkBoxContainer: {
    alignContent: 'center',
    flexDirection: 'row',
  },
});

export default CheckBoxWithLabel;