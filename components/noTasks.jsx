import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { myCustomColors } from "../constants";

export default function NoTasks() {
  const image_one = require("../assets/images/trash.png");
  const image_two = require("../assets/images/trash1.png");
  const image_three = require("../assets/images/trash2.png");
  return (
    <View style={styles.container}>
      {/* image grid starts here */}
      <View style={styles.imagesGrid}>
        <View style={styles.topGridLayer}>
          <Image
            source={image_two}
            style={[styles.gridImage, { flex: 2 }]}
            contentFit="contain"
          />
          <Image
            source={image_three}
            style={styles.gridImage}
            contentFit="contain"
          />
        </View>

        <Image
          source={image_one}
          style={styles.gridImage}
          contentFit="contain"
        />
      </View>
      {/* image grid ends here */}
      <Text style={styles.emptyText}>
        There are No tasks available to display
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBlock: "auto",
  },
  imagesGrid: {
    height:400,
    width: "100%",
    gap: 8,
  },
  topGridLayer: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    gap: 8,
  },
  gridImage: {
    flex: 1,
    borderRadius: 12,
    borderColor: myCustomColors.green,
    borderWidth: 2,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 600,
    color: myCustomColors.primaryOrange,
    marginTop: 12,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 27,
  },
});
