import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../styles/COLORS";
const DateLeft = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-time-outline" size={12} color={COLORS.primary800} />
      <Text style={styles.text}>7 days</Text>
    </View>
  );
};

export default DateLeft;
const styles = StyleSheet.create({
  container: {
    width:60,
    paddingVertical:2,
    paddingHorizontal:5,
    borderRadius:14,
    backgroundColor:COLORS.primary600,
    flexDirection: "row",
    alignItems:'center',
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.primary800,
  },
});
