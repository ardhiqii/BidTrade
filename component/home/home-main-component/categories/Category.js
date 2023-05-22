import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "@categoryIcons/coin.png";
import { COLORS } from "../../../../styles/COLORS";
const iconSize = 32
const containerSize = 56
const Category = ({imageUrl,name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={imageUrl} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {
    width:containerSize,
    height: containerSize,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: iconSize,
    height: iconSize,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color:COLORS.primary800
  },
});
