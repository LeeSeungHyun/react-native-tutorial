import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  // const [ name, setName ] = useState('shaun');
  // const [ age, setAge ] = useState('31');
  // const [ people, setPeople ] = useState([
  //   { name: 'shaun', id: '1' },
  //   { name: 'yoshi', id: '2' },
  //   { name: 'mario', id: '3' },
  //   { name: 'luigi', id: '4' },
  //   { name: 'peach', id: '5' },
  //   { name: 'toad', id: '6' },
  //   { name: 'bowser', id: '7' },
  //   { name: 'bowser2', id: '8' },
  //   { name: 'bowser3', id: '9' }
  // ]);

  const [ todos, setTodos ] = useState([
    { text: 'buy beverage', key: '1' },
    { text: 'practice singing 1 hour', key: '2' },
    { text: 'react native lecture by 15', key: '3' }
  ])


  // const clickHandler = () => {
  //   setName('chun-li');
  //   setPerson({ name: 'lee', age: 31 });
  // }

  // const pressHandler = (id) => {
  //   console.log(id)
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id);
  //   })
  // }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Oops!', 'toDos Must be over 3 chars long', [
        {text: 'understood', onPress: () => console.log('alert closed')}
      ])
    }
  } 

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo 
            submitHandler={submitHandler}
          />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                  item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
