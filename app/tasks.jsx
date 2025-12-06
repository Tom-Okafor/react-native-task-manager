import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoTasks from "../components/noTasks";
import { TaskCard } from "../components/taskCard";
import { myCustomColors } from "../constants";

export default function TasksScreen() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) return;
    setTasks((prevTasks) => {
      setInputValue("");
      return [...prevTasks, { title: inputValue.trim(), isComplete: false }];
    });
  }

  function completeTask(index) {
    setTasks((prevTasks) =>
      prevTasks.map((eachTask, taskIndex) => {
        if (taskIndex === index) {
          eachTask.isComplete = true;
        }
        return eachTask;
      })
    );
  }

  function onPressDelete(taskIndex) {
    Alert.alert(
      "Delete Task",
      "You are about to Delete a Task. Proceed?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete Task",
          onPress: () => {
            deleteTask(taskIndex);
          },
        },
      ],
      { cancelable: true }
    );
  }

  function deleteTask(taskIndex) {
    setTasks((prevTask) => {
      Alert.alert("Task Deleted");
      return prevTask.filter((_, index) => index !== taskIndex);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="format-list-bulleted-type"
          size={24}
          color={myCustomColors.primaryOrange}
        />
        <Text style={styles.mainText}>Your Tasks</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="playlist-check"
            size={24}
            color={myCustomColors.green}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Add Your Task Here"
            placeholderTextColor={myCustomColors.gray}
            value={inputValue}
            onChangeText={(word) => {
              setInputValue(word);
            }}
            maxLength={40}
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleAddTask}>
          <Text style={styles.submitText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskCard
            title={item.title}
            isComplete={item.isComplete}
            index={index}
            key={index}
            onPress={() => {
              completeTask(index);
            }}
            onPressDelete={() => {
              onPressDelete(index);
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        ListEmptyComponent={<NoTasks />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: myCustomColors.background,
    paddingHorizontal: 24,
  },
  mainText: {
    color: myCustomColors.primaryOrange,
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 1.2,
    fontSize: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 24,
  },
  formContainer: {
    marginTop: 20,
    gap: 12,
    alignItems: "center",
    width: "100%",
    marginHorizontal: "auto",
    height: 110,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    flex: 1,
    borderWidth: 2,
    borderColor: myCustomColors.green,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  submitBtn: {
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: myCustomColors.primaryOrange,
    borderRadius: 50,
  },
  submitText: {
    color: myCustomColors.lightOrange,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
});
