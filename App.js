import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Fabio', key: '1'},
    { name: 'Thinan', key: '2'},
    { name: 'Fabiola', key: '3'},
    { name: 'Nereide', key: '4'},
    { name: 'Naila', key: '5'},
    { name: 'Julia', key: '6'},
    { name: 'Solange', key: '7'}
  ])

  return (
    <View style={styles.container}>
      <ScrollView>

        {people.map(item => (
  
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
       
        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
