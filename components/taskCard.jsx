import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { myCustomColors } from "../constants";

export function TaskCard({ index, title, isComplete, onPress, onPressDelete }) {
  const task_icon = require("@/assets/images/task-icon.png");
  const completed_icon = require("../assets/images/completed.png");
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.sideBar,
          {
            backgroundColor:
              (index + 1) % 2 === 0
                ? myCustomColors.green
                : (index + 1) % 3 === 0
                ? myCustomColors.primaryOrange
                : myCustomColors.teal,
          },
        ]}
      ></View>
      <View style={styles.mainTaskCardContent}>
        <View style={styles.taskTopBar}>
          <Image
            source={task_icon}
            contentFit="contain"
            style={styles.iconImage}
          />
          <Text
            style={[
              styles.topText,
              {
                backgroundColor: isComplete
                  ? myCustomColors.lightGreen
                  : myCustomColors.lightRed,
                color: isComplete ? myCustomColors.green : myCustomColors.red,
              },
            ]}
          >
            {isComplete ? "Task Completed" : "Task Uncompleted"}
          </Text>
        </View>
        <Text style={styles.taskTitle}>{title}</Text>
        {isComplete ? (
          <View style={styles.bottomLayer}>
            <Image
              source={completed_icon}
              contentFit="contain"
              style={styles.completedIcon}
            />
            <Text style={styles.completedText}>Task Completed</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={onPressDelete}>
              <MaterialCommunityIcons
                name="delete"
                size={30}
                color={myCustomColors.lightRed}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <Text style={styles.touchableText}>Mark As Completed</Text>
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={24}
              color={myCustomColors.lightOrange}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    backgroundColor: myCustomColors.lightOrange,
    borderRadius: 20,
    boxShadow: "0px 2px 12px rgba(0,0,0,0.4)",
    marginHorizontal: "auto",
    flexDirection: "row",
    gap: 16,
    overflow: "hidden",
    marginBottom: 24,
  },
  sideBar: {
    width: 8,
    height: "100%",
  },
  mainTaskCardContent: {
    flex: 1,
    height: "100%",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 16,
  },
  taskTopBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "auto",
  },
  iconImage: {
    height: 60,
    width: 60,
  },
  topText: {
    fontSize: 16,
    fontWeight: 600,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  taskTitle: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: 600,
    color: myCustomColors.primaryOrange,
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 16,
  },
  bottomLayer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: "100%",
  },
  completedIcon: {
    width: 40,
    height: 40,
  },
  completedText: {
    color: myCustomColors.green,
    fontSize: 16,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
    backgroundColor: myCustomColors.green,
    gap: 8,
  },
  touchableText: {
    color: myCustomColors.background,
    fontSize: 14,
    fontWeight: 600,
  },
  deleteBtn: {
    marginLeft: "auto",
  },
});
