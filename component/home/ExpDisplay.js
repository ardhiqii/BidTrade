import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/COLORS";

const circleSize = 12;
const barSize = 2;
const Circle = () => {
  return (
    <View style={CStyles.container}>
      <View style={CStyles.inside}></View>
    </View>
  );
};
const CStyles = StyleSheet.create({
  outsideContainer: {
    alignItems: "center",
    backgroundColor: "red",
  },
  container: {
    width: circleSize,
    height: circleSize,
    backgroundColor: COLORS.primary600,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: circleSize / 2,
  },
  inside: {
    width: circleSize / 2,
    height: circleSize / 2,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: circleSize / 4,
  },
  text: {
    fontSize: 8,
    color: COLORS.primary800,
    fontWeight: "bold",
  },
});

const Bar = ({ exp }) => {
  const white = 80 - exp;
  return (
    <View style={BStlyes.outside}>
      <View style={[BStlyes.container, { width: exp }]}></View>
      {white != 0 && (
        <View
          style={[BStlyes.container, BStlyes.white, { width: white }]}
        ></View>
      )}
    </View>
  );
};
const BStlyes = StyleSheet.create({
  outside: {
    flexDirection: "row",
  },
  container: {
    height: barSize,
    width: 80,
    backgroundColor: COLORS.primary600,
    borderWidth: 0.5,
  },
  white: {
    backgroundColor: "white",
  },
});
function ExpDisplay() {
  return (
    <View>
      <View style={styles.container}>
        <Circle />
        <Bar exp={20} />
        <Circle />
      </View>
      <View style={styles.rankContainer}>
        <Text style={styles.rankText}>Coal</Text>
        <Text style={styles.rankText}>Iron</Text>
      </View>
    </View>
  );
}

export default ExpDisplay;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rankText:{
    fontSize:8,
    fontWeight:'bold',
    color:COLORS.primary800
  }
});
