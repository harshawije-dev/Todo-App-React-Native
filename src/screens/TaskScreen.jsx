import { View, Text, Button } from "react-native";
import React from "react";

const TaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const ID = JSON.stringify(taskId);

  return (
    <View>
      <Text>{ID}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TaskScreen;
