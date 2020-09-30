import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  // const [ name, setName ] = useState('shaun');
  // const [ age, setAge ] = useState('31');
  const [ people, setPeople ] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
    { name: 'bowser2', key: '8' },
    { name: 'bowser3', key: '9' }
  ]);


  // const clickHandler = () => {
  //   setName('chun-li');
  //   setPerson({ name: 'lee', age: 31 });
  // }

  return (
    <View style={styles.container}>
      {/* <Text>Enter name: </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />
    
      <Text>Enter age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}
      />
      <Text>name: {name}, age: {age}</Text> */}
      <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
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
    // justifyContent: 'center'
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
