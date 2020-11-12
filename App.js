import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (itemGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: itemGoal}
    ])
  };

  return (
    <View style={styles.screen}>
        <GoalInput onAddGoal = {addGoalHandler}/>
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => (
            <GoalItem onDelete={() => console.log('onDelete work')} title={itemData.item.value} />
          )} 
        />
    </View>
  ); 
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }
});
