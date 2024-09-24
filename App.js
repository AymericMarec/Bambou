import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {openDatabase} from 'react-native-sqlite-storage';

// export const getDBConnection = async () => {
//   return openDatabase({name: 'pute.db', location: 'default'});
// };


const Stack = createNativeStackNavigator();

const Screen1  = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Page 1</Text>
    <View style={styles.Footer}>
      <TouchableOpacity disabled >
        <Text style={styles.ButtonLeftLoaded} >Page1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Screen2')}>
        <Text style={styles.ButtonRight}>Page2</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
  </View>
);

const Screen2 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Page2</Text>
    <View style={styles.Footer}>
      <TouchableOpacity onPress={() => navigation.replace('Screen1')}>
        <Text style={styles.ButtonLeft} >Page1</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled>
        <Text style={styles.ButtonRightLoaded}>Page2</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
  </View>
);
const SwitchPage1 = (navigation) => {
  navigation.replace('Screen1')
};

const SwitchPage2 = (navigation) => {
  navigation.replace('Screen2')
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
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
