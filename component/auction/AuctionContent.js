import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import AuctionDetails from "./AuctionDetails";
import Button from "../ui/Button";

const deviceHeight = Dimensions.get('window').height
const uri = 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg'
// const uri = 'https://cdn.discordapp.com/attachments/777233158130892873/1093666601506705448/ngulum.jpg'
function AuctionContent() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Images */}
        <ImageBackground
          source={{
            uri: uri,
          }}
          style={styles.imageBackground}
          blurRadius={100}
        >
          <Image
            style={styles.image}
            source={{
              uri: uri,
            }}
          />
        </ImageBackground>
      </View>
      <AuctionDetails />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} >Place Bid</Button>
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
    width:'100%',
    alignItems: "center",
    position:'absolute',
    top:(deviceHeight-100)
  },
  button: {
    width: "80%",
    borderRadius: 25,
  },
});
