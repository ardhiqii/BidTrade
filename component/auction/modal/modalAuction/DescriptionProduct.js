import { StyleSheet, Text, View } from "react-native";

const DescriptionProduct = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Description Product</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default DescriptionProduct;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    lineHeight: 22.5,
  },
});
