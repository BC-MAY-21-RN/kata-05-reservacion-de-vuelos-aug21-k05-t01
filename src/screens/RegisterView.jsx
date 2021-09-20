import React, {useState} from 'react';
import {View, ScrollView, TextInput,TouchableOpacity, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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
        <TextInput 
          type='Text'
          onChangeText={setTextFirstName}
          value={textFirstName}
          style={styles.textField}
        />
        <Text>Email*</Text>
        <TextInput 
          email={true}
          onChangeText={setTextEmail}
          value={textEmail}
          style={styles.textField}
        />
        <Text>Password*</Text>
        <TextInput 
          type='password'
          secureTextEntry={true} 
          onChangeText={setTextPassword}
          value={textPassword}
          style={styles.textField}
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
          <TouchableOpacity style={styles.buttonSection}>
            <Text style={styles.textButonSection}>Sing Up</Text>
          </TouchableOpacity>
          <Text style={styles.centerSelf}>or</Text>
          <TouchableOpacity style={styles.buttonSection}>
            <Text style={styles.textButonSection}>Sing Up with Google</Text>
          </TouchableOpacity>
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
  textField: {
    borderWidth: 1,
    borderColor: '#5c5c5c',
    marginBottom: 15,
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
  },
  boxButtonsSection:{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15
  },
  buttonSection: {
    backgroundColor: '#7383f9',
    width: '95%',
    height: 40,
    borderRadius: 8,
    borderColor: '#7383f9',
    justifyContent: 'center',
  },
 textButonSection: {
    fontSize: 15,
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
 }
});


export default RegisterView;
