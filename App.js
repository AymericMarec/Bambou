import { StyleSheet, Text, View ,TouchableOpacity, Alert,useEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage,TotalPage } from './Controller/Screen/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="TotalPage" component={TotalPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex : 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable: {

  },
  ButtonLeft: {
    position : 'absolute',
    backgroundColor : 'lightblue',
    padding : 15,
    right : "20%",
    bottom : -25
  },
  ButtonRight: {
    position : 'absolute',
    backgroundColor : 'lightblue',
    padding : 15,
    left : "20%",
    bottom : -25
  },
  ButtonLeftLoaded:{
    position : 'absolute',
    backgroundColor : 'blue',
    padding : 15,
    right : "20%",
    bottom : -25
  },
  ButtonRightLoaded:{
    position : 'absolute',
    backgroundColor : 'blue',
    padding : 15,
    left : "20%",
    bottom : -25
  },
  Footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray',
    padding: 30,
    alignItems: 'center',
  }
});
