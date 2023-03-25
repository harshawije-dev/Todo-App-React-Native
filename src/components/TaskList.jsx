import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import Task from "./Task";

const TaskList = ({ props }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props}
        renderItem={({ item }) => <Task data={item} styles={styles.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default TaskList;
