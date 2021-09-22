import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './TextBoxWithButtonStyle';

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

export default TextBoxWithButton;
