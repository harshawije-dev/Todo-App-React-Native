import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAddDoc } from "../hooks/useFirestore";

const NewTask = () => {
  const [task, setTask] = useState();
  const [date, setDate] = useState();

  const uploadDocument = (state) => useAddDoc(state);

  return (
    <View style={css.container}>
      <View>
        <Text>Add Task</Text>
        <View>
          <TextInput
            style={css.inputStyle}
            placeholder="Meeting with Joe"
            onChangeText={(text) => setTask(text)}
          />
        </View>
        <View>
          <TextInput
            style={css.inputStyle}
            placeholder="04/03/2023"
            onChangeText={(date) => setDate(date)}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={() => uploadDocument({ task, date })}
          />
        </View>
      </View>

      <View>{/* <Text>{task}</Text> */}</View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 2,
    paddingTop: 5,
  },

  inputStyle: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default NewTask;
