import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';



export const HomePage  = ({ navigation }) => (
  <View style={styles.container}>
    
    <TouchableOpacity onPress={() => navigation.replace('TotalPage')}>
    <View style={styles.totalContainer}>
        <Text style={styles.Total}>1024 €</Text>
    </View>
    </TouchableOpacity>
   
    <View style={styles.Footer}>
      <TouchableOpacity disabled >
        <Text style={styles.ButtonLeftLoaded} >Page1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('TotalPage')}>
        <Text style={styles.ButtonRight}>Page2</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
  </View>
);


const styles = StyleSheet.create({
    container: {
      flex : 2,
      backgroundColor: '#323232',
      alignItems: 'center',
    },
    Touchable: {
  
    },
    totalContainer: {
        backgroundColor : '#D9D9D9',
        padding:100,
        flexDirection:'column',
        top:75,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    ButtonLeft: {
      position : 'absolute',
      backgroundColor : 'lightblue',
      padding : 15,
      right : "20%",
      bottom : -25
    },

    Total: {
        color : '#000',
        fontSize: 50,
        fontWeight: '700',
        flexWrap:'wrap',
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
  