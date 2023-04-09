import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import AuctionDetails from "./AuctionDetails";
import Button from "../ui/Button";
import { useRoute } from "@react-navigation/native";
import { DUMMY_DATA } from "./AuctionsDisplay";

const deviceHeight = Dimensions.get("window").height;
function AuctionContent() {
  const route = useRoute();
  const dataProduct = DUMMY_DATA.filter((data) => data.id === route.params)[0];
  const { currentPrice, imgUri, nameProduct } = dataProduct;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Images */}
        <ImageBackground
          source={{
            uri: imgUri,
          }}
          style={styles.imageBackground}
          blurRadius={100}
        >
          <Image
            style={styles.image}
            source={{
              uri: imgUri,
            }}
          />
        </ImageBackground>
      </View>
      <AuctionDetails nameProduct={nameProduct} currentPrice={currentPrice} />
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>Place Bid</Button>
      </View>
    </View>
  );
}
export default AuctionContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "55%",
    maxHeight: 430,
    width: "100%",
    backgroundColor: "green",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: deviceHeight - 100,
  },
  button: {
    width: "80%",
    borderRadius: 25,
  },
});
