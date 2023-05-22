import { ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "../ui/Search";
import HomeMain from "./HomeMain";
import { COLORS } from "../../styles/COLORS";
import BidWallet from "./BidWallet";
import BidChievment from "./BidChievment";
import Navbar from "../ui/Navbar/Navbar";
import { useEffect, useState } from "react";

function HomeContent() {
  const [afterScrolling, setAfterScrolling] = useState(false)

  const onChangeY = (e) =>{
    if (e>18){
      setAfterScrolling(true)
    } else{
      setAfterScrolling(false)
    }
  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
      onScroll={e => onChangeY(e.nativeEvent.contentOffset.y)}
    >
      {/* <Search /> */}
      <View style={[styles.navBarContainer, afterScrolling && styles.navBarSCrolled]}>
        <Navbar />
      </View>
      <View style={styles.topContainer}>
        <View style={styles.topContent}>
          <BidWallet />
          <BidChievment />
        </View>
      </View>
      <HomeMain />
    </ScrollView>
  );
}

export default HomeContent;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.primary500,
    rowGap: 13,
  },
  navBarContainer:{
    paddingHorizontal:24,
    paddingTop:30,
    paddingBottom:10,
  },
  navBarSCrolled:{
    backgroundColor:COLORS.primary500,
    borderBottomWidth:1,
  },
  topContainer: {
    height: 80,
    paddingBottom:10,
    justifyContent: "center",
  },
  topContent: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
