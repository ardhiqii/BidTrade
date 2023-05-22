import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/COLORS";

const BidWallet = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/icons/wallet.png")}
            style={{
              flex: 1,
              resizeMode: "contain",
              width: null,
              height: null,
            }}
          />
        </View>
        <Text style={[styles.text,styles.title]}>BidWallet</Text>
      </View>
      <Text style={[styles.text,styles.money]}>Rp 80.000</Text>
    </Pressable>
  );
};

export default BidWallet;
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 120,
    paddingHorizontal: 18,
    borderRadius: 14,
    rowGap: 3,
    justifyContent: "center",
    backgroundColor: "white",
    elevation:4,
  },
  imageContainer: {
    width: 16,
    height: 16,
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
  title:{
    color:COLORS.gray
  },
  money:{
    color:COLORS.primary800
  }
});
