import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {useValidation} from 'react-native-form-validator';
import {createNewUser} from '../../library/methods/firebaseRegister';
import TextBox from '../../components/TextBox/TextBox';
import TextBoxWithButton from '../../components/TextBoxWithButton/TextBoxWithButton';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBoxWithLabel from '../../components/CheckBoxWithLabel/CheckBoxWithLabel';
import InputLabel from '../../components/InputLabel/InputLabel';
import {styles} from './RegisterViewStyle';
import Spinner from '../../components/Spinner/Spinner';
import {onGoogleButtonPress} from '../../library/methods/googleSignIn';

const RegisterView = ({navigation}) => {
  const [firstName, setTextFirstName] = useState('');
  const [email, setTextEmail] = useState('');
  const [password, setTextPassword] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [subscribeCheckBox, setSubscribeCheckBox] = useState(false);
  const [activeButtons, setActiveButtons] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      await onGoogleButtonPress();
      setLoading(false);
      navigation.navigate('MyFlights');
    } catch(error) {
      setLoading(false);
    }
  };

  const {validate, isFormValid, getErrorsInField} = useValidation({
    state: { firstName, email, password }
  });

  const SingUp = () => {
    validate({
      firstName: { required: true },
      email: { email: true, required: true},
      password: { minlength: 8, hasNumber:true, hasSpecialCharacter:true, required: true},
    });
    if(isFormValid()){
      setLoading(true);
      createNewUser(firstName, email, password, setLoading, navigation);
    }
  };
  
  useEffect(() => {
    if(firstName.length > 0 && email.length > 0 && password.length > 0 && termsCheckBox == true){
      setActiveButtons(true)
    }else{
      setActiveButtons(false)
    }
  }, [firstName !== '' && email !== '' && password !== '' && termsCheckBox == true])

  return(
    <>
      {loading && <Spinner text='loging in'/>}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sign Up </Text>
        <View>
          <InputLabel style={styles.textInputLabel} errorMessages={getErrorsInField('firstName')}>First Name</InputLabel>
          <TextBox value={firstName} onChange={setTextFirstName}/>

          <InputLabel style={styles.textInputLabel} errorMessages={getErrorsInField('email')}>Email</InputLabel>
          <TextBox value={email} onChange={setTextEmail}/>
          <InputLabel style={styles.textInputLabel} errorMessages={getErrorsInField('password')}>Password</InputLabel>

          <TextBoxWithButton type='password' value={password} onChange={setTextPassword} />
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
            <CustomButton onPress={SingUp} enabled={activeButtons} text='Sign Up'/>
            <Text style={styles.centerSelf}>or</Text>
            <CustomButton onPress={handleGoogleSignUp} text='Sign Up with Google' />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              Already have an account? <Text style={styles.sectionIn} onPress={() => navigation.navigate('Login')}>Log in</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterView;
