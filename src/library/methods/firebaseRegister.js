import auth from '@react-native-firebase/auth';
import { createUserInitialData } from './firebaseCreateCollections';

export const firebaseRegister = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      user
      .updateProfile({displayName: name})
      .then(
        () => {
          createUserInitialData();
          resolve('User created & signed in');
        }
        )
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};
