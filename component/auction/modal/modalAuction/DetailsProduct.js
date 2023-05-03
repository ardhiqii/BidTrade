import { StyleSheet, Text, View } from "react-native";

const DUMMY_Details = [
  {
    keyName: "Kondisi",
    value: "Baru",
  },
  {
    keyName: "Berat Satuan",
    value: "-",
  },
  {
    keyName: "Kategori",
    value: "NFT",
  },
];
const categories = ["Kondisi","Berat Satuan","Kategori"]
const RenderItem = ({ keyName, value, index }) => {
    const isKategori =  keyName == "Kategori"
  return (
    <View
      key={index}
      style={[index != 0 && styles.itemNeedBorder, styles.item]}
    >
      <View style={styles.containerText}>
        <Text style={styles.text}>{keyName}</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={ [styles.text,isKategori && styles.blueText]}>{value}</Text>
      </View>
    </View>
  );
};

const DetailsProduct = ({detailsProduct}) => {
  const contents = categories.map((data, index) => {
    const keyName = data
    const value = detailsProduct[keyName]
    return <RenderItem key={index} keyName={keyName} value={value} index={index} />;
  });
  return <View>{contents}</View>;
};

export default DetailsProduct;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingVertical:5,
  },
  itemNeedBorder: {
    borderTopWidth: 1.5,
    borderColor: "#e8e8e8",
  },
  containerText: {
    flex:1,
  },
  blueText:{
    color:'#3072e8',
    fontWeight:'bold',
  },
  text:{
    fontSize:15,
    color:'#767676'
  }
});
