import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7383f9',
    width: '100%',
    height: 45,
    borderRadius: 8,
    borderColor: '#7383f9',
    justifyContent: 'center',
  },
  textButon: {
    fontSize: 15,
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
  }    
});
export default CustomButton;