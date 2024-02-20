import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const URL = 'https://randomuser.me/api/?results=10';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.heading}>Facebook</Text>
        {data.map((person, idx) => (
          <View style={{ width: "50%", padding: 10, marginBottom: 20, gap: 10 }}>
            <View style={{flexDirection : 'row', alignItems : 'center'}}>
              <Image source={{ uri: person.picture.medium }} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text key={idx} style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>{person.name.first}</Text>
            </View>
            <TouchableOpacity >
              <Text style={styles.button} onPress={() => console.log('Resquest sent')}>Add Friend</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  heading: {
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    padding: 6,
    fontSize: 20,
  },
  button: {
    fontWeight: 'bold',
    color: "white",
    backgroundColor: "#0861f2",
    width: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 12,
    borderRadius: 10,
  }
});
