import { StyleSheet, View } from "react-native";
import Search from "../ui/Search";
import HomeMain from "./HomeMain";

function HomeContent() {
  return (
    <View style={styles.container}>
      <Search />
      {/* Serach */}
      <HomeMain/>
    </View>
  );
}

export default HomeContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
