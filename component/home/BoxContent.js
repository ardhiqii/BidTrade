import { StyleSheet, Text, View } from "react-native";

function BoxContent({ children, header }) {
  return (
    <View style={styles.container}>
      { header &&
      <View style={styles.headerContantainer}>
        <Text>{header}</Text>
        <Text>{header && 'See more'}</Text>
      </View>}
      {children}
    </View>
  );
}

export default BoxContent;

const styles = StyleSheet.create({
  container: {
    rowGap:5,
    backgroundColor:'white',
    paddingVertical:12,
    borderRadius:10,
  },
  headerContantainer: {
    paddingHorizontal:18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
