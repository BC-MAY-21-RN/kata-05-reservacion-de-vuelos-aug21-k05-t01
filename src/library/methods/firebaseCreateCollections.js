import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUserInitialData = async () => {
  firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('bookings').doc(auth().currentUser.uid).set({
          flights: [],
        });
      }
    });
};
