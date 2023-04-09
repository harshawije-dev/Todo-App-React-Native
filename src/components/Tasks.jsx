import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import TaskList from "./TaskList";

const Tasks = ({nav}) => {
  const [list, setTodoList] = useState();
  const collectionRef = collection(firestore, "tasks");

  /**
   * TODO: use the useEffect hook to see the difference
  **/
  useLayoutEffect(() => {
    const subscribe = onSnapshot(collectionRef, {
      next: (snapshot) => {
        const todoList = [];

        snapshot.docs.forEach((doc) => {
          todoList.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setTodoList(todoList);
      },
    });
  }, []);

  return (
    <View>
      {list !== undefined ? (
        <TaskList nav={nav} props={list} />
      ) : (
        <ActivityIndicator size="small" />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Tasks;
