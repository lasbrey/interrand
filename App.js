import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/navigator';


export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <HomeStackNavigator />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

 