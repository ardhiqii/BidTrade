import { ScrollView, StyleSheet, View } from "react-native";
import BoxContent from "./BoxContent";
import AuctionsDisplay from "../auction/AuctionsDisplay";
import Carousel from "../ui/Carousel";

function HomeMain() {
  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      contentContainerStyle={{ rowGap: 15 }}
    >
      <BoxContent>
        <Carousel />
      </BoxContent>
      <View>
        <BoxContent header={"Popular Auction"}>
          <AuctionsDisplay />
        </BoxContent>
        <BoxContent header={"Recent Auction"}>
          <AuctionsDisplay />
        </BoxContent>
      </View>
    </ScrollView>
  );
}
export default HomeMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
