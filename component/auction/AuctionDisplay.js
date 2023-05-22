import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { updateDataRecentUser } from "../../util/user";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import { COLORS } from "../../styles/COLORS";
import FormatCurrency from "../../util/FormatCurrency";

function AuctionDisplay({ id, name_product, current_price, imgUri, empty }) {
  const nav = useNavigation();
  const userCtx = useContext(UserContext);
  async function redirectProduct() {
    nav.navigate("Auction", id);
    await updateDataRecentUser(userCtx.user.uid, id);
  }
  if (empty) {
    return (
      <View style={styles.containerEmpty}>
        <Text style={styles.textEmpty}>There is no recent auction</Text>
      </View>
    );
  }
  return (
    <Pressable style={[styles.container]} onPress={redirectProduct}>
      <View style={styles.containerImage}>
        <Image source={{ uri: imgUri }} style={styles.image} />
      </View>
      <View style={styles.containerName}>
        <Text style={[styles.text]}>Rp {FormatCurrency(current_price)}</Text>
        <Text style={[styles.text, { color: COLORS.primary700 }]}>
          {name_product}
        </Text>
      </View>
    </Pressable>
  );
}

export default AuctionDisplay;

const styles = StyleSheet.create({
  container: {
    width: 96,
    rowGap:8,
  },
  containerImage: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: COLORS.primary600,
    resizeMode: "cover",
    overflow: "hidden",
  },
  containerName: {
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 10,
    color: COLORS.primary800,
    fontWeight: "bold",
  },
  containerEmpty: {
    width: "100%",
    height: 120,
    justifyContent: "center",
  },
  textEmpty: {
    textAlign: "center",
    fontSize: 20,
    color: "#7d7d7d",
  },
});
