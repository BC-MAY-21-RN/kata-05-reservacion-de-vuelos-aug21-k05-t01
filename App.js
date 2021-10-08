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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='BookingFrom' component={BookingFromView}/>
        <Stack.Screen name='Login' component={LoginView}/>
        <Stack.Screen name='Register' component={RegisterView}/>
        <Stack.Screen name='MyFlights' component={MyFlightsView}/>
        <Stack.Screen name='BookingDate' component={BookingDateView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
