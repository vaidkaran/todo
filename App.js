import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cancelTaskInput = () => setIsModalVisible(false);
  const [tasks, setTasks] = useState([]);
  const taskInputHandler = (newTask) => {
    setTasks([...tasks, { id: Math.random().toString(), value: newTask }]);
  };
  const onDeleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button title={'Add Task'} onPress={() => setIsModalVisible(true)} />
      <TaskInput
        visible={isModalVisible}
        onCancel={cancelTaskInput}
        taskInputHandler={taskInputHandler}
      />
      <TaskList tasks={tasks} onDelete={onDeleteHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  text: {
    borderColor: 'black',
    backgroundColor: '#DCDCDC',
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 2,
  },
});
