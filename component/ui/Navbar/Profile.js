import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../styles/COLORS";

const imgUri =
  "https://cdn.discordapp.com/attachments/777233158130892873/1093666601506705448/ngulum.jpg";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imgUri }} />
      </View>
      <View>
        <Text style={styles.text}>Welcome</Text>
        <Text style={[styles.text, { color: COLORS.primary800 }]}>
          Ammarleo
        </Text>
      </View>
      <Image
        style={styles.rankIcon}
        source={require("../../../assets/rankIcons/coal.png")}
      />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth:1,
    borderColor:COLORS.primary800
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  rankIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 0,
  },
});
