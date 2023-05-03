import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const ChangeMethodPayment = ({ method, customStyles }) => {
  return (
    <Pressable>
      <View style={[styles.container, customStyles]}>
        <View style={styles.methodContainer}>
          <View>
            <FontAwesome name="cc-visa" size={30} />
          </View>
          <View>
            <Text>**** **** **** 8969</Text>
          </View>
        </View>
        <View>
            <Text style={styles.textButton }>Change</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChangeMethodPayment;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    backgroundColor: "white",
  },
  methodContainer:{
    flexDirection:'row',
    alignItems:'center',
    columnGap:10,
  },
  textButton:{
    color:'#3072e8',
    fontWeight:'bold'
  }
});
