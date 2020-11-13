import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button,  View,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (itemGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: itemGoal}
    ])
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }



  return (
    <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => (
            <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
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
