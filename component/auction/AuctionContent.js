import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AuctionDetails from "./AuctionDetails";
import Button from "../ui/Button";
import { useRoute } from "@react-navigation/native";
import { DUMMY_DATA } from "./AuctionsDisplay";
import { useEffect, useState } from "react";
import { getDataAuctionWithId } from "../../util/db";
import { getDataUserById } from "../../util/user";

const deviceHeight = Dimensions.get("window").height;
function AuctionContent() {
  const [dataProduct, setDataProduct] = useState();
  const [nameSeller,setNameSeller] = useState()
  const [fetchingData, setFetchingData] = useState(true);
  const route = useRoute();
  const idProduct = route.params;
  useEffect(() => {
    async function getData() {
      const data = await getDataAuctionWithId(idProduct);
      setDataProduct(data);
      const sellerName = await getDataUserById(data.id_seller)
      setNameSeller(sellerName["full_name"])
      setFetchingData(false);
    }
    getData();
  }, []);
  if (fetchingData) {
    return (
      <View>
        <Text>LOADING BOS</Text>
      </View>
    );
  }
  const {
    imgUri,
    name_product: nameProduct,
    current_price: currentPrice,
    description,
  } = dataProduct;
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
      <AuctionDetails nameProduct={nameProduct} currentPrice={currentPrice} description={description} nameSeller={nameSeller} />
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
