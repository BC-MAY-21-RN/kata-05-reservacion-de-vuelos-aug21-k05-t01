import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButtonStyle';

const CustomButton = ({onPress = () => {}, text, activity = true}) => {
    
  return(
    <TouchableOpacity 
       disabled={!activity}
      style={activity? styles.button : styles.activityButton}
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
