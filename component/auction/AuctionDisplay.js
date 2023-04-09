import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function AuctionDisplay({ id, nameProduct, imgUri, currentPrice, index }) {
    const nav = useNavigation()
    function redirectProduct(){
        nav.navigate('Auction',id)
    }
  return (
    <Pressable
      style={[
        styles.container
      ]}
      onPress={redirectProduct}
    >
      <View style={styles.containerImage}>
        <Image source={{ uri: imgUri }} style={styles.image} />
      </View>
      <View style={styles.containerName}>
        <Text>{nameProduct}</Text>
      </View>
    </Pressable>
  );
}

export default AuctionDisplay;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:'white',
    elevation:5

  },
  containerImage: {
    width: "100%",
    height: 100,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    overflow:'hidden'
  },
  containerName: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
