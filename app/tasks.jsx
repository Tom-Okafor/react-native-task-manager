import { FormContainer } from "@/components/formContainer";
import { TaskLists } from "@/components/taskLists";
import TaskScreenHeader from "@/components/taskScreenHeader";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { myCustomColors } from "../constants";

export default function TasksScreen() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TaskScreenHeader />

      <FormContainer
        inputValue={inputValue}
        setTasks={setTasks}
        setInputValue={setInputValue}
      />
      <TaskLists tasks={tasks} setTasks={setTasks} />
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
});
