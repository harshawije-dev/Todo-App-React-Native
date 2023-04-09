import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = ({ data, styles, nav }) => {
  const { task, date, id } = data;

  return (
    <TouchableOpacity
      style={button.button}
      onPress={() =>
        nav.navigate("Task", {
          taskId: id,
        })
      }
    >
      <Text style={styles}>{task}</Text>
      <Text style={styles}>{date}</Text>
    </TouchableOpacity>
  );
};

const button = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 10,
  },
});

export default Task;
