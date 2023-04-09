import { StyleSheet, Text, View } from "react-native";

function AuctionDetailsTop(currentPrice) {
  return (
    <View style={stylesTop.container}>
      <View style={[stylesTop.box]}>
        <Text style={stylesTop.headerText}>Seller</Text>
        <View>
          <Text style={[stylesTop.text]}>Aufa Fauqi Ardhiqi</Text>
        </View>
      </View>
      {/* ================ */}
      <View style={[stylesTop.box]}>
        <Text style={[stylesTop.headerText, { textAlign: "right" }]}>
          Current Price
        </Text>
        <View>
          <Text style={[stylesTop.text, { textAlign: "right" }]}>
            {"Rp." + currentPrice.currentPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}

function AuctionDetailsDescription() {
  return (
    <View style={stylesDes.container}>
      <Text style={[stylesDes.text]}>Description</Text>
      <Text style={stylesDes.desText}>
        Togey a.k.a LEO is a person with animal behavior such as DOG
      </Text>
    </View>
  );
}

function AuctionDetails({ nameProduct, currentPrice }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textProduct}>{nameProduct}</Text>
      <AuctionDetailsTop currentPrice={currentPrice} />
      <AuctionDetailsDescription />
    </View>
  );
}

export default AuctionDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 12,
    rowGap: 15,
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
});
