import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/COLORS";
import ExpDisplay from "./ExpDisplay";

const BidChievment = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/icons/trophey.png")}
          style={{
            flex: 1,
            resizeMode: "contain",
            width: null,
            height: null,
          }}
        />
      </View>
      <View style={{rowGap:5}}>
        <Text style={[styles.text, styles.title]}>BidChievment</Text>
        <ExpDisplay />
      </View>
    </Pressable>
  );
};

export default BidChievment;
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 211,
    paddingHorizontal: 8,
    borderRadius: 14,
    rowGap: 3,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 4,
  },
  imageContainer: {
    width: 64,
    height: 64,
  },
  topContainer: {
    flexDirection: "row",
    columnGap: 3,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    color: COLORS.gray,
  },
  money: {
    color: COLORS.primary800,
  },
});
