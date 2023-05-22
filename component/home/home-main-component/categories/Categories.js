import { View, Image, FlatList, StyleSheet } from "react-native";
import Category from "./Category";

const ICONS = [
  {
    name: "Clothes",
    imageUrl: require("@categoryIcons/tshirt.png"),
  },
  {
    name: "Shoes",
    imageUrl: require("@categoryIcons/shoes.png"),
  },
  {
    name: "Bags",
    imageUrl: require("@categoryIcons/handbag.png"),
  },
  {
    name: "Electronic",
    imageUrl: require("@categoryIcons/electric-appliance.png"),
  },
  {
    name: "NFT",
    imageUrl: require("@categoryIcons/coin.png"),
  },
  {
    name: "Kitchen",
    imageUrl: require("@categoryIcons/frying-pan.png"),
  },
  {
    name: "Make Up",
    imageUrl: require("@categoryIcons/make-up.png"),
  },
  {
    name: "Body Care",
    imageUrl: require("@categoryIcons/lotion.png"),
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      {ICONS.map((icon) => (
        <Category {...icon} key={icon.name} />
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'center',
    flexWrap:"wrap",
    rowGap:32,
    columnGap:32,
  },
});
