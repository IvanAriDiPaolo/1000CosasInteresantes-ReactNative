import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='logreg'>
        <Stack.Screen options={{ headerShown: false }} name='logreg' component={LoginScreen} />
        <Stack.Screen options={{ headerStyle: {backgroundColor: '#2f558a'} }} name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
