import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Trip from '../../components/Trip/Trip';
import {styles} from './MyFlightsViewStyle';
import resourceData from '../../services/data/dataCarts.json';

const MyFlightsView = () => {
  const createNewflight = () => {
    Alert.alert('Go');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My flights</Text>

      <ScrollView style={styles.scrollView}>
        {resourceData?.map(value => {
          return (
            <View key={value.id}>
              <Trip
                date={value.date}
                passenger={value.passenger}
                fromCountryCode={value.fromCountryCode}
                fromCountryName={value.fromCountryName}
                toCountryCode={value.toCountryCode}
                toCountryName={value.toCountryName}
              />
              <View style={styles.sectionLine} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.sectionCreate}>
        <TouchableOpacity onPress={createNewflight}>
          <Icon name="add-circle" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyFlightsView;
