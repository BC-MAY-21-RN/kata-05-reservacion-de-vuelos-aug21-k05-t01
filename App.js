/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import RegisterView from './src/screens/RegisterView/RegisterView';
import LoginView from './src/screens/LoginView/LoginView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFlightsView from './src/screens/MyFlightsView/MyFlightsView';
import BookingFromView from './src/screens/BookingView/BookingFromView';
import BookingDateView from './src/screens/BookingView/BookingDateView';
import BookingToView from './src/screens/BookingView/BookingToView';
import BookingPassengersView from './src/screens/BookingView/BookingPassengersView';
import BookingFinishView from './src/screens/BookingView/BookingFinishView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={LoginView}/>
        <Stack.Screen name='Register' component={RegisterView}/>
        <Stack.Screen name='MyFlights' component={MyFlightsView}/>        
        <Stack.Screen name='BookingFrom' component={BookingFromView}/>
        <Stack.Screen name='BookingTo' component={BookingToView}/>
        <Stack.Screen name='BookingDate' component={BookingDateView}/>
        <Stack.Screen name='BookingPassengers' component={BookingPassengersView}/>
        <Stack.Screen name='BookingFinish' component={BookingFinishView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
