import React, {useState} from 'react';
import {View, ScrollView, TextInput,TouchableOpacity, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBox from '../components/TextBox';
import CustomButton from '../components/CustomButton';

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
        <Text>First name</Text>
        <TextBox 
          value={textFirstName}
          onChange={setTextFirstName}
        />
        <Text>Email*</Text>
        <TextBox 
          value={textEmail}
          onChange={setTextEmail}
        />
        <Text>Password*</Text>
        <TextBox 
          type='password'
          value={textPassword}
          onChange={setTextPassword}
        />        
        <Text>Use 8 or more chearacters with a mix of letters, numbers, and symbols </Text>

        <View
          style={styles.checkBoxContainer}
        >
          <CheckBox 
            disabled={false}
            value={termsCheckBox}
            onValueChange={(newValue) => {setTermsCheckBox(newValue)}}
          />
          <Text
            style={styles.checkBoxText}          
          >
            I agree to the Terms and Prvacy policy.
          </Text>
        </View>
        
        <View
          style={styles.checkBoxContainer}
        >
          <CheckBox 
            disabled={false}
            value={subscribeCheckBox}
            onValueChange={(newValue) => {setSubscribeCheckBox(newValue)}}
          />
          <Text
           style={styles.checkBoxText}
          >
            Subscribe for select product updates.
          </Text>
        </View>
        
        <View style={styles.boxButtonsSection}>          
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
  checkBoxContainer: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  checkBoxText: {
    alignSelf: 'center',
  },
  centerSelf: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  boxButtonsSection:{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15
  },
});


export default RegisterView;
