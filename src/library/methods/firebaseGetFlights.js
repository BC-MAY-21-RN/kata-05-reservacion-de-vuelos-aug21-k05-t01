import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const getUserFlights = async () => {
  const flights = await firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get();
  if(flights.exists) {
    return flights.data().flights;
  } else {
    return [];
  }
};
