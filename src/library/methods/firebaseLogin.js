import auth from '@react-native-firebase/auth';

export const firebaseLogin = async (email, password, navigation) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      navigation.navigate('MyFlights');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

      if(error.code == 'auth/invalid-password') {
        alert('Invalid password');
      }

      alert('Couldn´t log in');
    });
};
