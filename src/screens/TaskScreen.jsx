import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGetDoc } from "../hooks/useFirestore";

const TaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const ID = taskId;
  const [updatedTask, setTask] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    useGetDoc(ID).then((item) => {
      const { date, task } = item;
      setDateTime(date);
      setTask(task);
    });
  }, []);

  return (
    <View>
      <TextInput
        value={updatedTask}
        style={styles.input}
        keyboardType="default"
        onChangeText={setTask}
      />
      <View>
        <TextInput
          value={dateTime}
          style={styles.input}
          keyboardType="default"
          onChangeText={setDateTime}
        />
      </View>

      <Button title="Update" onPress={() => alert("Updated")} />
      <Button title="Delete" onPress={() => alert("Deleted")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TaskScreen;
