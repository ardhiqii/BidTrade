import { Pressable, StyleSheet, View } from "react-native";
import Profile from "./Profile";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../styles/COLORS";
function Navbar() {
  return (
    <View style={styles.container}>
      <Profile />
      <View style={styles.iconsContainer}>
        <Pressable>
          <Ionicons
            name="md-search-outline"
            color={COLORS.primary800}
            size={24}
          />
        </Pressable>
        <Pressable>
          <Ionicons
            name="notifications-outline"
            color={COLORS.primary800}
            size={24}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Navbar;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // paddingHorizontal: 24,
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    columnGap: 20,
  },
});
