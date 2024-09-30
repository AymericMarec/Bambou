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