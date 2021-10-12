import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const registerFlight = async (flight) => {
  const flightToRegister = {id: 0, ...flight}
  await firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get()
    .then(async documentSnapshot => {
      if (documentSnapshot.exists) {
        const collectionData = documentSnapshot.data();
        flightToRegister.id = collectionData.flights.length.toString();
        collectionData.flights.push(flightToRegister);
        await firestore()
          .collection('bookings')
          .doc(auth().currentUser.uid)
          .set(collectionData);
      } else {
        Alert.alert('Error: the user doesn´t have a booking collection');
      }
    });
};
