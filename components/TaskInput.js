import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TaskInput(props) {
  const [taskInput, setTaskInput] = useState('');

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.container}>
        <TextInput
          placeholder={' Add a task'}
          style={styles.input}
          onChangeText={(text) => setTaskInput(text)}
          value={taskInput}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            onPress={() => {
              props.taskInputHandler(taskInput);
              setTaskInput('');
            }}
          />
          <View flex={0.1} />
          <Button title="Cancel" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '80%',
    marginBottom: 10,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 10,
  },
});
