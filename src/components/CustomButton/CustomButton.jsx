import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButtonStyle';

const CustomButton = ({onPress = () => {}, text}) => {
    
  return(
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    >
      <Text 
        style={styles.textButon}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
