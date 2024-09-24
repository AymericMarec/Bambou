import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDBConnection,createTableUser,addUser,OpenDB } from './Controller/DBGestion/DBFunction';
import {openDatabase } from 'react-native-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';
import { HomePage } from './Controller/Screen/home';
// import {openDatabase} from 'react-native-sqlite-storage';

// export const getDBConnection = async () => {
//   return openDatabase({name: 'pute.db', location: 'default'});
// };


const Stack = createNativeStackNavigator();
// SQLite.enablePromise(true); 
// db = OpenDB()

// console.log("test")

const TotalPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Page2</Text>
    <View style={styles.Footer}>
      <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
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
  navigation.replace('HomePage')
};

const SwitchPage2 = (navigation) => {
  navigation.replace('TotalPage')
};

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
