import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [subject, setSubject] = useState("")

  const handleClick = () => {
    if (name.length > 0 && age.length > 0 && subject.length > 0) {
      setText([
        ...text,
        {
          id: text.length,
          name: name,
          age: age,
          subject: subject
        }
      ])
      setName("")
      setAge("")
      setSubject("")
    }
    else {
      alert("Please enter all the values")
    }
  }

  const handleName = (value) => {
    setName(value)
  }

  const handleAge = (value) => {
    setAge(value)
  }

  const handleSubject = (value) => {
    setSubject(value)
  }

  const handleDelete = (id) => {
    console.log(id)
    let newText = text
    newText = newText.filter(item => item.id != id)
    setText(newText)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Name: </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter name'
        onChangeText={handleName}
        value={name}
      />
      <Text>Age: </Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter Age'
        onChangeText={handleAge}
        value={age}
      />
      <Text>Subject: </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Subject'
        onChangeText={handleSubject}
        value={subject}
      />
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={{ color: 'white' }}>Button</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ marginBottom: 120 }}>
        {text.map(item =>
          <View key={item.id}>
            <Text style={styles.item}>
              {item.name} {item.age} {item.subject}
              <TouchableOpacity style={{backgroundColor: 'black', float: 'right'}} onPress={()=>handleDelete(item.id)}>
                <Text style={{ color: 'white', padding: 5}}>Delete</Text>
              </TouchableOpacity>
            </Text>
          </View>)}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10
  },
  input: {
    width: 200,
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },
  item: {
    marginTop: 12,
    width: 200,
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 5
  }
});
