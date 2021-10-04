import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firebaseRegister = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      user
      .updateProfile({displayName: name})
      .then(
        () => resolve('User was sucessfully created & signed in'));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};
