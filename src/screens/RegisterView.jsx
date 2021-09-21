import React, {useState} from 'react';
import {View, ScrollView, TextInput,TouchableOpacity, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBox from '../components/TextBox';
import CustomButton from '../components/CustomButton';
import CheckBoxWithLabel from '../components/CheckBoxWithLabel';

const RegisterView = () => {
  const [textFirstName, setTextFirstName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textPassword,setTextPassword] = useState("");
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [subscribeCheckBox, setSubscribeCheckBox] = useState(false);

  return(
    <ScrollView
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        Sing Up
      </Text>
      <View>
        <Text style={styles.textInputLabel}>First name</Text>
        <TextBox 
          value={textFirstName}
          onChange={setTextFirstName}
        />
        <Text style={styles.textInputLabel}>Email*</Text>
        <TextBox 
          value={textEmail}
          onChange={setTextEmail}
        />
        <Text style={styles.textInputLabel} >Password*</Text>
        <TextBox 
          type='password'
          value={textPassword}
          onChange={setTextPassword}
        />        
        <Text
          style={styles.passwordMessage}
        >
          Use 8 or more characters with a mix of letters, numbers, and symbols.
        </Text>
        <View style={styles.checkBoxContainer}>
          <CheckBoxWithLabel
            value={termsCheckBox}
            changeValue={setTermsCheckBox}
          >
            I agree to the Terms and Prvacy policy.
          </CheckBoxWithLabel>
          
          <CheckBoxWithLabel
            value={subscribeCheckBox}
            changeValue={setSubscribeCheckBox}
          >
            Subscribe for select product updates
          </CheckBoxWithLabel>
        </View>
        <View>          
          <CustomButton 
            text='Sign Up'
          />
          <Text style={styles.centerSelf}>or</Text>
          <CustomButton 
            text='Sign Up with Google'
          />
        </View>
      </View>
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 8,
  },
  title: {
    color: '#7383f9',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 23,
  },
  centerSelf: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  textInputLabel: {
    marginBottom: 5,
  },
  passwordMessage: {
    color: '#4d4d4d',
    fontSize: 12,
    marginBottom: 25,
  },
  checkBoxContainer: {
    marginBottom: 30,
  }
});


export default RegisterView;
