import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../styles/COLORS";
const BoxComponent = ({ name, children, header = true }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {header && (
          <>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>See All</Text>
          </>
        )}
      </View>
      {children}
    </View>
  );
};

export default BoxComponent;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    rowGap: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary800,
  },
});
