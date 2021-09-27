import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import TextBoxWithButton from '../../components/TextBoxWithButton/TextBoxWithButton';
import TextBox from '../../components/TextBox/TextBox';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from '../RegisterView/RegisterViewStyle';

const LoginView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.textInputLabel}>Email</Text>
        <TextBox style={styles.textInputLabel} value={email} onChange={setEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInputLabel}>Password</Text>
        <TextBoxWithButton style={styles.textInputLabel} type='password' value={password} onChange={setPassword}  />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text='Sign In'/>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          Don´t have an account? <Text style={styles.sectionIn} onPress={() => navigation.navigate('Register')}>Sign Up</Text> 
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginView;
