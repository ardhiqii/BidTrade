import { StyleSheet, Text, View } from "react-native";

function BoxContent({ children, header }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContantainer}>
        <Text>{header}</Text>
        <Text>See More</Text>
      </View>
      {children}
    </View>
  );
}

export default BoxContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,

  },
  headerContantainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
