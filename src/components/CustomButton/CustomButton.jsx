import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButtonStyle';

const CustomButton = ({onPress = () => {}, text, enabled = true}) => {

  return(
    <TouchableOpacity
      disabled={!enabled}
      style={[styles.button, enabled ? styles.enabled : styles.disabled]}
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
