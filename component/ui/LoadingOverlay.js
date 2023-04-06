import { ActivityIndicator, StyleSheet, View } from "react-native";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
