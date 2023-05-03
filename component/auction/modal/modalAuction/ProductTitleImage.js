import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const uri =
  "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg";

const ProductTitleImage = ({imgUri,nameProduct}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imgUri,
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>{nameProduct}</Text>
      </View>
    </View>
  );
};

export default ProductTitleImage;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
    },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 5,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text:{
    fontSize:15,
    fontWeight:'bold'
  }
});
