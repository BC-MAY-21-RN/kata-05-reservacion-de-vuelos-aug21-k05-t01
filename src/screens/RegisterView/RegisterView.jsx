import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import TextBox from '../../components/TextBox/TextBox';
import TextBoxWithButton from '../../components/TextBoxWithButton/TextBoxWithButton';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBoxWithLabel from '../../components/CheckBoxWithLabel/CheckBoxWithLabel';
import {styles} from './RegisterViewStyle';

const RegisterView = () => {
  const [textFirstName, setTextFirstName] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textPassword,setTextPassword] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [subscribeCheckBox, setSubscribeCheckBox] = useState(false);

  return(
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <Text style={styles.textInputLabel}>First name</Text>
        <TextBox value={textFirstName} onChange={setTextFirstName}/>
        <Text style={styles.textInputLabel}>Email*</Text>
        <TextBox value={textEmail} onChange={setTextEmail}/>
        <Text style={styles.textInputLabel}>Password*</Text>
        <TextBoxWithButton type='password' value={textPassword} onChange={setTextPassword} />        
        <Text style={styles.passwordMessage}>
          Use 8 or more characters with a mix of letters, numbers, and symbols.
        </Text>
        <View style={styles.checkBoxContainer}>
          <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox}>
            I agree to the Terms and Privacy policy.
          </CheckBoxWithLabel>
          <CheckBoxWithLabel value={subscribeCheckBox} changeValue={setSubscribeCheckBox}>
            Subscribe for select product updates
          </CheckBoxWithLabel>
        </View>
        <View>          
          <CustomButton text='Sign Up'/>
          <Text style={styles.centerSelf}>or</Text>
          <CustomButton text='Sign Up with Google' />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>
            Already have an account? <Text style={styles.sectionIn}>Log in</Text> 
          </Text>
        </View>
      </View>
    </ScrollView> 
  );
};

export default RegisterView;
