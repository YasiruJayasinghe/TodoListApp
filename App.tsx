import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './app/screens/List';
import Login from './app/screens/Login';
import Welcome from './app/screens/Welcome';
import Register from './app/screens/Register';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
    <Stack.Screen name='Welcome' component={Welcome} />
    <Stack.Screen name='List' component={List} />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>
</NavigationContainer>
  );
}
