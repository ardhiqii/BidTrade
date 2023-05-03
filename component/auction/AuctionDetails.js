import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { truncateText } from "../../util/truncateText";
import ModalAuctionProduct from "./modal/modalAuction/ModalAuctionProduct";
import { useState } from "react";
import FormatCurrency from "../../util/FormatCurrency";

function AuctionDetailsTop({ currentPrice, nameSeller }) {
  return (
    <View style={stylesTop.container}>
      <View style={[stylesTop.box]}>
        <Text style={stylesTop.headerText}>Seller</Text>
        <View>
          <Text style={[stylesTop.text]}>{nameSeller}</Text>
        </View>
      </View>
      {/* ================ */}
      <View style={[stylesTop.box]}>
        <Text style={[stylesTop.headerText, { textAlign: "right" }]}>
          Current Price
        </Text>
        <View>
          <Text style={[stylesTop.text, { textAlign: "right" }]}>
            Rp {FormatCurrency(currentPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
}

function AuctionDetailsDescription({
  description,
  nameProduct,
  imgUri,
  detailsProduct
}) {
  const [onModal,changeOnModal] = useState(false)
  const ModalAuctionProductProps = {
    onModal,
    changeOnModal,
    nameProduct,
    imgUri,
    detailsProduct,
    description
  }
  const truncated = truncateText(description);
  const openModal = () =>{
    changeOnModal(true)
  }
  return (
    <View style={stylesDes.container}>
      <Text style={[stylesDes.text]}>Description</Text>
      <Text style={stylesDes.desText}>{truncated}</Text>
      <Pressable onPress={openModal}>
        <Text style={stylesDes.readMoreText}>Read More</Text>
      </Pressable>
      <ModalAuctionProduct {...ModalAuctionProductProps} customStyles={stylesDes.modal} />
    </View>
  );
}

function AuctionDetails({
  nameProduct,
  currentPrice,
  description,
  nameSeller,
  imgUri,
  detailsProduct
}) {
  const detailsTopProps = {
    currentPrice,
    nameSeller,
  };
  const AuctionDetailsDescrptionProps = {
    description,
    nameProduct,
    imgUri,
    detailsProduct
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ rowGap: 15 }}>
      <Text style={styles.textProduct}>{nameProduct}</Text>
      <AuctionDetailsTop {...detailsTopProps} />
      <AuctionDetailsDescription
        {...AuctionDetailsDescrptionProps}
      />
    </ScrollView>
  );
}

export default AuctionDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 12,
  },
  textProduct: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

const stylesTop = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    rowGap: 5,
  },
  headerText: {
    color: "#a8a8a8",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

const stylesDes = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  text: {
    fontSize: 15,
    letterSpacing: 1,
  },
  desText: {
    color: "#9a9a9a",
  },
  readMoreText: {
    color: "#3072e8",
  },
  modal:{
    height:'100%'
  }
});
