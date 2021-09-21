import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TextBoxWithButton = ({type = 'text', value, onChange}) => {
  const [showText, setShowText] = useState(false);

  return(
    <View>
      <TextInput 
        type={type}
        value={value}
        onChangeText={onChange}
        secureTextEntry={!showText}
        style={styles.textField}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setShowText(!showText)}
      >
        <Icon 
          name={showText ? 'eye-off' : 'eye'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: '#5c5c5c',
    marginBottom: 15,
    paddingLeft: 12,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 2,
    right: 15,
    top: 8,
  },
  icon: {
    fontSize: 30,
    color: '#4d4d4d',
  },
});

export default TextBoxWithButton;