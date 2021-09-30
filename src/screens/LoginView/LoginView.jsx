import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {useValidation} from 'react-native-form-validator';
import TextBoxWithButton from '../../components/TextBoxWithButton/TextBoxWithButton';
import TextBox from '../../components/TextBox/TextBox';
import CustomButton from '../../components/CustomButton/CustomButton';
import InputLabel from '../../components/InputLabel/InputLabel';
import {styles} from '../RegisterView/RegisterViewStyle';
import { firebaseLogin } from '../../library/methods/firebaseLogin';
import Spinner from '../../components/Spinner/Spinner';

const LoginView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {validate, isFieldInError, getErrorsInField} = useValidation({state: { email, password }});

  const onPressButton = async () => {
    validate({
      email: { email: true, required: true },
      password: { minlength: 8, required: true },
    });   
    if(!isFieldInError('email') && !isFieldInError('password')) {
      setLoading(true);
      await firebaseLogin(email, password, navigation);
      setLoading(false)
    }
  };

  return(
    <>
      {loading && <Spinner text='loging in'/>}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.inputContainer}>
          <InputLabel errorMessages={getErrorsInField('email')}>Email</InputLabel>
          <TextBox style={styles.textInputLabel} value={email} onChange={setEmail} />
        </View>
        <View style={styles.inputContainer}>
          <InputLabel errorMessages={getErrorsInField('password')}>Password</InputLabel>
          <TextBoxWithButton style={styles.textInputLabel} type='password' value={password} onChange={setPassword}/>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text='Sign In' onPress={onPressButton}/>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>
            Don´t have an account? <Text style={styles.sectionIn} onPress={() => navigation.navigate('Register')}>Sign Up</Text> 
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginView;
