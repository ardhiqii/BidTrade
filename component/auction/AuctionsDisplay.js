import { FlatList, StyleSheet, Text, View } from "react-native";
import AuctionDisplay from "./AuctionDisplay";
import { getDatasAuction } from "../../util/db";
import { useEffect, useState } from "react";

export const DUMMY_DATA = [
  {
    id: "1",
    nameProduct: "Togey",
    imgUri:
      "https://cdn.discordapp.com/attachments/777233158130892873/1093666601506705448/ngulum.jpg",
    currentPrice: "5000",
  },
  {
    id: "2",
    nameProduct: "Monyet",
    imgUri:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    currentPrice: "10000",
  },
  {
    id: "3",
    nameProduct: "Iphone 14 Pro Max",
    imgUri:
      "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_max_deep_purple_1_1.jpg",
    currentPrice: "10000",
  },
];

function renderAuction(itemData) {
  return <AuctionDisplay {...itemData.item} index={itemData.index} />;
}

function AuctionsDisplay({ type, recentAuctions }) {
  const [dataAuctions, setDataAuctions] = useState();
  const [fetchingData, setFetchingData] = useState(true);
  useEffect(() => {
    async function getDatas() {
      let datas;
      if (type === "popular") {
        datas = await getDatasAuction();
      } else if (type === "recent") {
        datas =
          recentAuctions.length > 0
            ? await getDatasAuction(recentAuctions)
            : [];
      }
      setDataAuctions(datas);
      setFetchingData(false);
    }
    try {
      getDatas();
    } catch (e) {}
  }, [recentAuctions]);
  function itemSeperator() {
    return <View style={styles.itemSeperatorStyle} />;
  }
  if (fetchingData) {
    return (
      <View>
        <Text>Loading mase</Text>
      </View>
    );
  }
  if (dataAuctions.length === 0) {
    return <AuctionDisplay empty />;
  }
  return (
    <FlatList
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={itemSeperator}
      data={dataAuctions}
      keyExtractor={(item) => item.id}
      renderItem={renderAuction}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default AuctionsDisplay;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  itemSeperatorStyle: {
    width: 10,
  },
});
