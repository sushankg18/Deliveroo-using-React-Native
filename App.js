import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Youtube</Text>
      <Text style={{backgroundColor : "blue", color : "white", width : "100%" , }}>HELLO THIS SIDE </Text>
      <Text>HELLO THIS SIDE </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>BY SUSHANKK GAUTAM</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth : 2,
    borderColor : "red"
  },
  heading : {
    backgroundColor : "red",
    color : "white",
    fontWeight : "bold",
    width : "100%",
    padding : 6, 
    fontSize : 20
  }
});
