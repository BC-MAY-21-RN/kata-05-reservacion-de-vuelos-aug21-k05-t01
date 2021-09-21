import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextBox = ({type = 'text', value, onChange}) => {
  return(
    <TextInput 
      type={type}
      value={value}
      onChangeText={onChange}
      secureTextEntry={type == 'password' ? true : false}
      style={styles.textField}
    />
  );
};

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: '#5c5c5c',
    marginBottom: 15,
    paddingLeft: 12,
  },
});

export default TextBox;