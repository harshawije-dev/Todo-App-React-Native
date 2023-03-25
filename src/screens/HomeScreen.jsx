import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import NewTask from "../components/NewTask";
import Tasks from "../components/Tasks";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <NewTask />
        <Tasks />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeView: {
    paddingVertical: 80,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
