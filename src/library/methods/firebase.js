export const createUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.log('That email address is invalid!');
      }

      Alert.error(error);
    });
};
