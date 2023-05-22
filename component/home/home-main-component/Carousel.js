import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DateLeft from "../../ui/DateLeft";
import { COLORS } from "../../../styles/COLORS";

const imgUri =
  "https://cdn.discordapp.com/attachments/777233158130892873/1105878428764360725/pngwing_1.png";
const Carousel = () => {
  return (
    <View style={stlyes.container}>
      <View style={stlyes.contentContainer}>
        <View style={stlyes.infoContainer}>
          <Text style={stlyes.infoText}>Snow Boot Leather</Text>
          <DateLeft />
        </View>
        <View style={stlyes.imageContaier}>
          <Image style={stlyes.image} source={{ uri: imgUri }} />
        </View>
      </View>
    </View>
  );
};

export default Carousel;

const stlyes = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: COLORS.primary500,
    width: "90%",
    maxWidth: 316,
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius:24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    width: "50%",
    rowGap: 10,
    justifyContent:'center'
  },
  infoText: {
    fontSize: 28,
    fontWeight: "bold",
    color:COLORS.primary800
  },
  imageContaier: {
    width: 128,
    height: 128,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
