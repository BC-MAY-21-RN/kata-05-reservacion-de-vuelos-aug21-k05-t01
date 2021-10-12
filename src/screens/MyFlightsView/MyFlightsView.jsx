import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Trip from '../../components/Trip/Trip';
import {styles} from './MyFlightsViewStyle';
import Spinner from '../../components/Spinner/Spinner';
import {getUserFlights} from '../../library/methods/firebaseGetFlights';

const MyFlightsView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);

  useEffect(async() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true);
      const userFlights = await getUserFlights();
      setFlights(userFlights);
      setLoading(false);
    });
    return unsubscribe;    
  }, [navigation]);

  return (
    <>
      {loading && <Spinner text='Fetching flights...'/>}
      <View style={styles.container}>
        <Text style={styles.title}> My flights</Text>
        <ScrollView style={styles.scrollView}>
          {flights.length > 0 ? flights.map(value => {
            return (
              <View key={value.id}>
                <Trip {...value} />
                <View style={styles.sectionLine} />
              </View>
            );
          }) : <Text>You don´t have any flight</Text>}
        </ScrollView>
        <View style={styles.sectionCreate}>
          <TouchableOpacity onPress={() => navigation.navigate('BookingFrom')}>
            <Icon name="add-circle" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default MyFlightsView;
