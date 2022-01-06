import MainStack from './navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import store from './redux/reducers/rootReducer'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});