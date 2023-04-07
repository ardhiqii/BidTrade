import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BackButton(onPress) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ opacity: 0.8 }}>
        <Ionicons name="chevron-back-circle" size={35} color={"white"} />
      </View>
    </Pressable>
  );
}
export default BackButton;
