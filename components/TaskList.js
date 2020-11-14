import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';

export default function TaskList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.tasks}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.text}>
              <Text onPress={()=>props.onDelete(item.id)}>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    width: '90%',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: '#DCDCDC',
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 2,
  },
});
