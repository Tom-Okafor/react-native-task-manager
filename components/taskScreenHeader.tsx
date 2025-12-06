import { myCustomColors } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
export default function TaskScreenHeader() {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="format-list-bulleted-type"
        size={24}
        color={myCustomColors.primaryOrange}
      />
      <Text style={styles.mainText}>Your Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
