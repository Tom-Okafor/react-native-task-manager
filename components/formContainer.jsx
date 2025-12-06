import { myCustomColors } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function FormContainer({ inputValue, setTasks, setInputValue }) {
  function handleAddTask() {
    if (!inputValue) return;
    setTasks((prevTasks) => {
      setInputValue("");
      return [...prevTasks, { title: inputValue.trim(), isComplete: false }];
    });
  }
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
