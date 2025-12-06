import { myCustomColors } from "@/constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  
  function handlePress() {
    router.replace("/tasks");
  }
  const imageSource = require("../assets/images/cover.png");
  return (
    <View style={homePageStyles.mainView}>
      <Image
        source={imageSource}
        style={homePageStyles.image}
        contentFit="cover"
      />
      <Text style={homePageStyles.mainText}>Simple Task Manager</Text>
      <Text style={homePageStyles.subText}>Manage your tasks efficiently</Text>
      <TouchableOpacity style={homePageStyles.touchable} onPress={handlePress}>
        <Text style={homePageStyles.touchablelText}>Start Now!</Text>
        <MaterialCommunityIcons
          name="arrow-right-drop-circle-outline"
          size={24}
          color={myCustomColors.lightOrange}
        />
      </TouchableOpacity>
    </View>
  );
}

const homePageStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: myCustomColors.background,
  },
  image: {
    width: "70%",
    height: 350,
  },

  mainText: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 4,
    fontWeight: 800,
    textTransform: "uppercase",
    color: myCustomColors.coral,
    letterSpacing: 1.5,
  },
  subText: {
    fontSize: 16,
    fontWeight: 400,
    color: myCustomColors.textColor,
  },
  touchable: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: myCustomColors.green,
    marginTop: 16,
  },
  touchablelText: {
    color: myCustomColors.background,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
});
