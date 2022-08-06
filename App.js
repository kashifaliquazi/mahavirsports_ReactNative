import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./app/screens/home/home"
import Login from "./app/screens/login/login"
import VerifyUser from "./app/screens/verifyuser/verifyuser"
import SignUp from "./app/screens/signup/signup"
import Purchases from "./app/screens/purchases/purchases"
import Booking from "./app/screens/booking/booking"
import Profile from "./app/screens/profile/profile"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();
function Menu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Purchases" component={Purchases} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator tialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyUser" component={VerifyUser} />
        <Stack.Screen name="Home" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;