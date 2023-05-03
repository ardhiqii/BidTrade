import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ModalLayout from "../../../ui/ModaLayout";
import ProductTitleImage from "./ProductTitleImage";
import DescriptionProduct from "./DescriptionProduct";
import DetailsProduct from "./DetailsProduct";

function ModalAuctionProduct({
  onModal,
  changeOnModal,
  customStyles,
  nameProduct,
  imgUri,
  detailsProduct,
  description,
}) {
  const ProductTitleImageProps = {
    imgUri,
    nameProduct,
  };
  return (
    <ModalLayout
      onModal={onModal}
      changeOnModal={changeOnModal}
      customStyles={customStyles}
      blackTransparantBackground={false}
    >
      <>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => changeOnModal(false)}>
            <Ionicons name="md-close-outline" size={40} color={"#a8a8a8"} />
          </Pressable>
          <Text style={styles.headerText}>Detail Product</Text>
        </View>
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={styles.container}
        >
          <ProductTitleImage {...ProductTitleImageProps} />
          <DetailsProduct detailsProduct={detailsProduct} />
          <DescriptionProduct description={description} />
        </ScrollView>
      </>
    </ModalLayout>
  );
}

export default ModalAuctionProduct;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    columnGap: 12,
    marginBottom: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    rowGap: 15,
    backgroundColor: "white",
    flexGrow:1,
  },
});
