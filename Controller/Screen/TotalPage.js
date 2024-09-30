import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export const TotalPage = ({ navigation }) => {

    return (
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
    )
  }