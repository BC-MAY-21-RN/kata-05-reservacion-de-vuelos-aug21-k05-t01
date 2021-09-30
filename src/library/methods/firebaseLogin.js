import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const firebaseLogin = async (email, password, navigation) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      navigation.navigate('MyFlights');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      if(error.code === 'auth/invalid-password') {
        Alert.alert('Invalid password');
      }

      Alert.alert('Couldn´t log in');
    });
};
