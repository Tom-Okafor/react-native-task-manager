import { Alert, FlatList, StyleSheet } from "react-native";
import NoTasks from "./noTasks";
import { TaskCard } from "./taskCard";

export function TaskLists({ tasks, setTasks }) {
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
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
});
