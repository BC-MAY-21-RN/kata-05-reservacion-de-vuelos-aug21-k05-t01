import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './TextBoxStyle';

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

export default TextBox;
