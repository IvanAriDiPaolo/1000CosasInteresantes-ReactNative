import MainStack from './navigation/MainStack';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
// import { store } from './redux/store';
import store from './redux/reducers/rootReducer'
export default function App() {

  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});