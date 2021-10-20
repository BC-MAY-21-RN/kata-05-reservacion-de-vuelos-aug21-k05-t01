import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {createUserInitialData} from './firebaseCreateCollections';

const firebaseRegister = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({displayName: name}).then(() => {
          createUserInitialData();
          resolve('User created & signed in');
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};

export const createNewUser = (firstName, email, password, setLoading, navigation) => {
  firebaseRegister(firstName, email, password)
    .then(() => {
      navigation.navigate('MyFlights');
    })
    .catch(() => {
      Alert.alert('The register failed');
    })
    .finally(() => {
      setLoading(false);
    });
};
