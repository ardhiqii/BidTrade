import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../styles/COLORS";
import DateLeft from "../../ui/DateLeft";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const imgUri =
  "https://cdn.discordapp.com/attachments/777233158130892873/1105878428764360725/pngwing_1.png";

const imageSize = 80;
const qualitySize = 40;


const Recommendation = () => {
    const [liked,setLiked] = useState(false)
    const likeHandler = () =>{
        setLiked(!liked)
    }
  return (
    <View style={stlyes.container}>
      <View style={stlyes.leftContainer}>
        <View style={stlyes.imageContainer}>
          <Image style={stlyes.image} source={{ uri: imgUri }} />
        </View>
        <View>
          <Text style={[stlyes.text, { fontSize: 16 }]}>Snow Boot Leather</Text>
          <Text style={[stlyes.text, { color: COLORS.primary700 }]}>
            Jakarta Selatan
          </Text>
          <Text style={stlyes.text}>Rp 500.000</Text>
        </View>
      </View>
      <View style={stlyes.rightContainer}>
        <Pressable onPress={likeHandler}>
          <Ionicons name="ios-heart" color={liked ? COLORS.heart : COLORS.primary600} size={24} />
        </Pressable>
        <DateLeft />
      </View>
      <Image style={stlyes.quality} source={require("@Icons/quality.png")} />
    </View>
  );
};

export default Recommendation;

const stlyes = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 96,
    padding: 12,
    borderRadius: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: COLORS.primary500,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  rightContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  quality: {
    position: "absolute",
    top: -10,
    left: -15,
    width: qualitySize,
    height: qualitySize,
  },
  text: {
    fontSize: 12,
    color: COLORS.primary800,
    fontWeight: "bold",
  },
});
